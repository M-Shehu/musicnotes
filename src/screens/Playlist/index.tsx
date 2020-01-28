/**
 * Playlist Screen
 *
 * This screen shows the playlist screen with the songs its comprised of
 */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';

import { NavigationOptionProps, AllPlaylistsInterface } from '../../interfaces';
import AddButton from './components/AddButton';
import { SONG_SELECTION_ROUTE } from '../../constants';
import BasicLayout from '../../templates/BasicLayout';

import PlaylistStyleFunc from './styles';

type ScreenProps = {
  /** The key of the playlist in the Redux store */
  playlistKey: string;
  /** The name of the playlist for the header */
  name: string;
  /** The color of the playlist */
  color: string;
  /** The array of songs in the playlist */
  songs: string[];
};

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp<ScreenProps>;
};

const Playlist: React.FC<Props> & {
  navigationOptions: (screenProps) => NavigationOptionProps;
} = ({ navigation }) => {
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

  // Check if songs are in the playlist and render conditionally based on that info
  return (
    <BasicLayout>
      <View style={PlaylistStyle.container}>
        {songs.length > 0 ? (
          <FlatList
            data={songs}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <View key={item} style={PlaylistStyle.view}>
                <Text style={PlaylistStyle.item}>{item}</Text>
              </View>
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
