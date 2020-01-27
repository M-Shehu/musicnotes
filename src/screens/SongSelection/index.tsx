/**
 * SongSelection Screen
 *
 * This screen is used to select the songs that go into a playlist
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, FlatList, Button, View, TouchableHighlight } from 'react-native';
import SongSelectionStyle from './styles';
import { NavigationStackProp } from 'react-navigation-stack';
import { NavigationOptionProps, AllPlaylistsInterface } from '../../interfaces';
import { PLAYLIST_ROUTE } from '../../constants';
import { updatePlaylist } from '../Playlist/actions';

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
  const useAllPlaylists = () => useSelector(state => state.AllPlaylists);
  const allPlaylistsObj: AllPlaylistsInterface = useAllPlaylists();
  const allSongsArray: string[] = useSelector(state => state.Songs);
  const playlistKey = navigation.getParam('playlistKey');
  const playlistSongs = allPlaylistsObj[playlistKey].songs;
  const dispatch = useDispatch();
  const onAddSongToPlaylist = (key, song) =>
    dispatch(updatePlaylist(key, song));
  return (
    <FlatList
      data={allSongsArray}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() => onAddSongToPlaylist(playlistKey, item)}>
          <View>
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
    <Button onPress={() => navigation.navigate(PLAYLIST_ROUTE)} title="Done" />
  ),
});

export default SongSelection;
