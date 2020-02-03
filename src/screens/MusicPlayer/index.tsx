/**
 * MusicPlayer Screen
 *
 * This screen shows the music currently playing with controls
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Platform, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import { NavigationStackProp } from 'react-navigation-stack';
import Sound from 'react-native-sound';

import MusicPlayerStyleFunc from './styles';
import ControlPanel from './components/ControlPanel';
import NameBox from './components/NameBox';
import { CurrentSongInterface, PlaylistInterface } from '../../interfaces';
import { getNextIndex, getPreviousIndex } from './utils';
import { updateCurrentSong } from './actions';

type ScreenProps = {
  /** color of the playlist */
  color: string;
  /** Name of the playlist */
  playlistName: string;
  /** The name of the song */
  songName: string;
  /** the name of the song artist */
  artistName: string;
};

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp<ScreenProps>;
};

let sound = null;
const MusicPlayer: React.FC<Props> = ({ navigation }) => {
  const [playState, setPlayState] = useState('playing'); //playing, paused
  const [playSeconds, setPlaySeconds] = useState(0);
  const [duration, setDuration] = useState(100);
  const dispatch = useDispatch();
  // This is being used to pass the color of the playlist down to the styles
  const color = navigation.getParam('color', 'white');
  const MusicPlayerStyle = MusicPlayerStyleFunc({ color });

  // Current song is selected from Redux state
  const useCurrentSong = () => useSelector(state => state.CurrentSong);
  const currentSongObj: CurrentSongInterface = useCurrentSong();

  const {
    songName,
    artistName,
    playlistKey,
    songPath,
    key: currentSongKey,
  } = currentSongObj;

  // Current playlist object is selected from Redux state
  const useCurrentPlaylist = playlistKey =>
    useSelector(state => state.AllPlaylists[playlistKey]);
  const currentPlaylistObj: PlaylistInterface = useCurrentPlaylist(playlistKey);

  const { name: playlistName, songs: playlistSongs } = currentPlaylistObj;

  const currentSongIndexInList = playlistSongs.findIndex(
    song => song.key === currentSongKey,
  );

  const nextSongObj =
    playlistSongs[getNextIndex(currentSongIndexInList, playlistSongs.length)];

  const previousSongObj =
    playlistSongs[
      getPreviousIndex(currentSongIndexInList, playlistSongs.length)
    ];

  useEffect(() => {
    if (playState === 'playing') play();
    const timeout = setInterval(() => {
      if (sound && sound.isLoaded() && playState === 'playing') {
        sound.getCurrentTime((seconds, isPlaying) => {
          setPlaySeconds(seconds);
        });
      }
    }, 100);

    return () => {
      if (sound) {
        sound.release();
        sound = null;
      }
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [duration, playState]);

  const play = async () => {
    if (sound) {
      sound.play(playComplete);
      setPlayState('playing');
    } else {
      const filepath = songPath;
      console.log('[Play]', filepath);

      sound = new Sound(filepath, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          Alert.alert('Notice', 'audio file error. (Error code : 1)');
          setPlayState('paused');
          return;
        } else {
          setPlayState('playing');
          // setDuration(sound.getDuration());
          sound.play(playComplete);
        }
      });
    }
  };

  const playComplete = success => {
    if (sound) {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        Alert.alert('Notice', 'audio file error. (Error code : 2)');
        setPlayState('paused');
        setPlaySeconds(0);
        sound.setCurrentTime(0);
      }
    }
  };

  const pause = () => {
    if (sound) sound.pause();
    setPlayState('paused');
  };

  const onPlayPause = () => (playState === 'paused' ? play() : pause());
  const onSkipBack = () =>
    dispatch(updateCurrentSong({ ...previousSongObj, playlistKey }));
  const onSkipNext = () =>
    dispatch(updateCurrentSong({ ...nextSongObj, playlistKey }));
  return (
    <View style={MusicPlayerStyle.container}>
      <View style={MusicPlayerStyle.nameBox}>
        <NameBox
          playlistName={playlistName}
          songName={songName}
          artistName={artistName}
        />
        <View
          style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            value={playSeconds}
            maximumValue={duration}
            maximumTrackTintColor="gray"
            minimumTrackTintColor="white"
            thumbTintColor="white"
            style={{
              width: 300,
              flex: 1,
              alignItems: 'stretch',
              marginHorizontal: Platform.select({ ios: 5 }),
            }}
          />
        </View>
      </View>
      <View style={MusicPlayerStyle.controlPanel}>
        <ControlPanel
          onSkipBack={onSkipBack}
          onSkipNext={onSkipNext}
          onPlayPause={onPlayPause}
          playState={playState}
        />
      </View>
    </View>
  );
};

export default MusicPlayer;
