/**
 * MusicPlayer Screen
 *
 * This screen shows the music controls of the music selected in the playlist screen
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import MusicPlayerStyleFunc from './styles';
import { NavigationStackProp } from 'react-navigation-stack';

import ControlPanel from './components/ControlPanel';
import NameBox from './components/NameBox';
import { CurrentSongInterface, PlaylistInterface } from '../../interfaces';

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

const MusicPlayer: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  // This is being used to pass the color of the playlist down to the styles
  const color = navigation.getParam('color', 'white');
  const MusicPlayerStyle = MusicPlayerStyleFunc({ color });

  // Current song is selected from Redux state
  const useCurrentSong = () => useSelector(state => state.CurrentSong);
  const currentSongObj: CurrentSongInterface = useCurrentSong();

  const { songName, artistName, playlistKey } = currentSongObj;

  // Current playlist object is selected from Redux state
  const useCurrentPlaylist = playlistKey =>
    useSelector(state => state.AllPlaylists[playlistKey]);
  const currentPlaylistObj: PlaylistInterface = useCurrentPlaylist(playlistKey);

  const { name: playlistName } = currentPlaylistObj;

  const onPlayPause = () => null;
  const onSkipBack = () => null;
  const onSkipNext = () => null;
  return (
    <View style={MusicPlayerStyle.container}>
      <View style={MusicPlayerStyle.nameBox}>
        <NameBox
          playlistName={playlistName}
          songName={songName}
          artistName={artistName}
        />
      </View>
      <View style={MusicPlayerStyle.controlPanel}>
        <ControlPanel
          onSkipBack={onSkipBack}
          onSkipNext={onSkipNext}
          onPlayPause={onPlayPause}
        />
      </View>
    </View>
  );
};

export default MusicPlayer;
