/**
 * AllPlaylists Screen
 *
 * This screen shows all the playlists of the music app and the number of songs each playlist has and the associated color
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import AllPlaylistsStyle from './styles';
import { NavigationStackProp } from 'react-navigation-stack';
import PlaylistEntry from './components/PlaylistEntry';
import { AllPlaylistsInterface } from '../../provider/store/stateInterfaces';

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp;
};

const AllPlaylists: React.FC<Props> = ({ navigation }) => {
  const allPlaylistsObj: AllPlaylistsInterface = useSelector(
    state => state.AllPlaylists,
  );
  return (
    <View style={AllPlaylistsStyle.container}>
      {Object.keys(allPlaylistsObj).map(playlistKey => (
        <PlaylistEntry
          key={playlistKey}
          playlistName={allPlaylistsObj[playlistKey].name}
          color={allPlaylistsObj[playlistKey].color}
          onOpenPlaylist={() => navigation.navigate('Playlist')}
          numberOfSongs={allPlaylistsObj[playlistKey].songs.length}
        />
      ))}
    </View>
  );
};

export default AllPlaylists;
