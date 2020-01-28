/**
 * AllPlaylists Screen
 *
 * This screen shows all the playlists of the music app and the number of songs each playlist has and the associated color
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View, Image } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import PlaylistEntry from './components/PlaylistEntry';
import { AllPlaylistsInterface, NavigationOptionProps } from '../../interfaces';
import { PLAYLIST_ROUTE } from '../../constants';
import BasicLayout from '../../templates/BasicLayout';

import AllPlaylistsStyle from './styles';

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp;
};

const AllPlaylists: React.FC<Props> & {
  navigationOptions: NavigationOptionProps;
} = ({ navigation }) => {
  // All playlist is selected from Redux state
  const useAllPlaylists = () => useSelector(state => state.AllPlaylists);
  const allPlaylistsObj: AllPlaylistsInterface = useAllPlaylists();

  const onOpenPlaylist = playlistKey => () =>
    navigation.navigate(PLAYLIST_ROUTE, {
      playlistKey,
      color: allPlaylistsObj[playlistKey].color,
    });
  return (
    <BasicLayout>
      <ScrollView>
        <View style={AllPlaylistsStyle.container}>
          {Object.keys(allPlaylistsObj).map(playlistKey => {
            const playlist = allPlaylistsObj[playlistKey];
            return (
              <PlaylistEntry
                key={playlistKey}
                playlistKey={playlistKey}
                playlistName={playlist.name}
                color={playlist.color}
                onOpenPlaylist={onOpenPlaylist(playlistKey)}
                numberOfSongs={playlist.songs.length}
              />
            );
          })}
          <Image
            style={AllPlaylistsStyle.backgroundImage}
            source={require('../../../assets/images/music-notes-logo.png')}
          />
        </View>
      </ScrollView>
    </BasicLayout>
  );
};

AllPlaylists.navigationOptions = {
  headerTitle: 'All Playlists',
};

export default AllPlaylists;
