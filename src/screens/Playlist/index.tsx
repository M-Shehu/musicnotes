/**
 * Playlist Screen
 *
 * This screen shows the playlist screen with the songs its comprised of
 */

import React from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';

import {
  NavigationOptionProps,
  AllPlaylistsInterface,
  SongsInterface,
} from '../../interfaces';
import AddButton from './components/AddButton';
import { SONG_SELECTION_ROUTE, MUSIC_PLAYER_ROUTE } from '../../constants';
import BasicLayout from '../../templates/BasicLayout';

import PlaylistStyleFunc from './styles';
import { updateCurrentSong } from '../MusicPlayer/actions';

type ScreenProps = {
  /** The key of the playlist in the Redux store */
  playlistKey: string;
  /** The name of the playlist for the header */
  name: string;
  /** The color of the playlist */
  color: string;
  /** The array of songs in the playlist */
  songs: SongsInterface[];
};

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp<ScreenProps>;
};

const Playlist: React.FC<Props> & {
  navigationOptions: (screenProps) => NavigationOptionProps;
} = ({ navigation }) => {
  const dispatch = useDispatch();
  // Select all playlist from Redux state
  const useAllPlaylists = () => useSelector(state => state.AllPlaylists);
  const allPlaylistsObj: AllPlaylistsInterface = useAllPlaylists();

  // Get selected color and playlist from previous location being navigated from
  const color = navigation.getParam('color', 'white');
  const playlistKey = navigation.getParam('playlistKey');

  // Pass color into the stylesheet
  const PlaylistStyle = PlaylistStyleFunc({ color });

  // Select the songs from all playlists using the playlistKey
  const songs = allPlaylistsObj[playlistKey].songs;

  const onUpdateCurrentSongAndNavigate = item => () => {
    dispatch(updateCurrentSong({ ...item, playlistKey }));
    navigation.navigate(MUSIC_PLAYER_ROUTE, {
      color,
    });
  };

  // Check if songs are in the playlist and render conditionally based on that info
  return (
    <BasicLayout>
      <View style={PlaylistStyle.container}>
        {songs.length > 0 ? (
          <FlatList
            data={songs}
            testID={`addedSong-${playlistKey}`}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor="white"
                testID="playlist-song"
                key={item.key}
                onPress={onUpdateCurrentSongAndNavigate(item)}>
                <View key={item.key} style={PlaylistStyle.view}>
                  <Text style={PlaylistStyle.item}>{item.songName}</Text>
                </View>
              </TouchableHighlight>
            )}
          />
        ) : (
          <Text style={PlaylistStyle.text}>
            Add songs to this playlist by tapping on the add button in the top
            right corner
          </Text>
        )}
      </View>
    </BasicLayout>
  );
};

Playlist.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('name', 'Your Playlist'),
  headerRight: () => (
    <AddButton
      onAddSong={() =>
        navigation.navigate(SONG_SELECTION_ROUTE, {
          playlistKey: navigation.getParam('playlistKey'),
          songs: navigation.getParam('songs', []),
        })
      }
    />
  ),
});

export default Playlist;
