/**
 * AllPlaylists Screen
 *
 * This screen shows all the playlists of the music app and the number of songs each playlist has and the associated color
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import AllPlaylistsStyle from './styles';
import { NavigationStackProp } from 'react-navigation-stack';
import PlaylistEntry from './components/PlaylistEntry';
import { AllPlaylistsInterface, NavigationOptionProps } from '../../interfaces';
import { PLAYLIST_ROUTE } from '../../constants';

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp;
};

const AllPlaylists: React.FC<Props> & {
  navigationOptions: NavigationOptionProps;
} = ({ navigation }) => {
  const useAllPlaylists = () => useSelector(state => state.AllPlaylists);
  const allPlaylistsObj: AllPlaylistsInterface = useAllPlaylists();
  return (
    <ScrollView>
      <View style={AllPlaylistsStyle.container}>
        {Object.keys(allPlaylistsObj).map(playlistKey => {
          const playlist = allPlaylistsObj[playlistKey];
          return (
            <PlaylistEntry
              key={playlistKey}
              playlistName={playlist.name}
              color={playlist.color}
              onOpenPlaylist={() =>
                navigation.navigate(PLAYLIST_ROUTE, {
                  playlistKey,
                })
              }
              numberOfSongs={playlist.songs.length}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

AllPlaylists.navigationOptions = {
  headerTitle: 'All Playlists',
};

export default AllPlaylists;
