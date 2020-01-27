/**
 * Playlist Screen
 *
 * This screen shows the playlist screen with the songs its comprised of
 */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import PlaylistStyleFunc from './styles';
import { NavigationStackProp } from 'react-navigation-stack';
import { NavigationOptionProps, AllPlaylistsInterface } from '../../interfaces';
import AddButton from './components/AddButton';
import { SONG_SELECTION_ROUTE } from '../../constants';
import BasicLayout from '../../templates/BasicLayout';

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
  const useAllPlaylists = () => useSelector(state => state.AllPlaylists);
  const color = navigation.getParam('color', 'white');
  const allPlaylistsObj: AllPlaylistsInterface = useAllPlaylists();
  const PlaylistStyle = PlaylistStyleFunc({ color });
  const playlistKey = navigation.getParam('playlistKey');
  const songs = allPlaylistsObj[playlistKey].songs;
  // Check if songs are in the playlist and render conditionally based on that info
  return (
    <BasicLayout>
      {songs.length > 0 ? (
        <View style={PlaylistStyle.container}>
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <Text style={PlaylistStyle.item}>{item}</Text>
            )}
          />
        </View>
      ) : (
        <View style={PlaylistStyle.container}>
          <Text style={PlaylistStyle.text}>
            Add songs to this playlist by tapping on the add button in the top
            right corner
          </Text>
        </View>
      )}
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
