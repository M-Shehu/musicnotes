/**
 * SongSelection Screen
 *
 * This screen is used to select the songs that go into a playlist
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, FlatList, Button, View, TouchableHighlight } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { NavigationOptionProps, StateInterface } from '../../interfaces';
import { PLAYLIST_ROUTE, Colors } from '../../constants';
import { updatePlaylist } from '../Playlist/actions';

import SongSelectionStyle from './styles';

type ScreenProps = {
  /** The key of the playlist in the Redux store */
  playlistKey: string;
  /** The array of songs in the playlist */
  songs: string[];
};

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp<ScreenProps>;
};

const SongSelection: React.FC<Props> & {
  navigationOptions: (screenProps) => NavigationOptionProps;
} = ({ navigation }) => {
  const dispatch = useDispatch();
  // Select all playlists and songs from Redux state
  const useAllState = () => useSelector(state => state);
  const {
    AllPlaylists: allPlaylistsObj,
    Songs: allSongsArray,
  }: StateInterface = useAllState();

  // Get selected playlist from previous location being navigated from
  const playlistKey = navigation.getParam('playlistKey');

  // Select the songs from all playlists using the playlistKey
  const playlistSongs = allPlaylistsObj[playlistKey].songs;

  // dispatch the action update playlist when a song is pressed
  const onAddSongToPlaylist = (key, song) =>
    dispatch(updatePlaylist(key, song));
  return (
    <FlatList
      data={allSongsArray}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <TouchableHighlight
          underlayColor="white"
          key={item}
          onPress={() => onAddSongToPlaylist(playlistKey, item)}>
          <View style={SongSelectionStyle.view}>
            <Text style={SongSelectionStyle.item}>{item}</Text>
            {playlistSongs.includes(item) && (
              <Text style={SongSelectionStyle.selectedTag}>Selected</Text>
            )}
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

SongSelection.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Select Songs',
  headerRight: () => (
    <Button
      onPress={() => navigation.navigate(PLAYLIST_ROUTE)}
      color={Colors.white}
      title="Done"
    />
  ),
  headerLeft: () => {},
});

export default SongSelection;
