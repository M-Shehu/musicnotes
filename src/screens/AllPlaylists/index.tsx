/**
 * AllPlaylists Screen
 *
 * This screen shows all the playlists of the music app and the number of songs each playlist has and the associated color
 */

import React from 'react';
import { Text, View, Button } from 'react-native';
import AllPlaylistsStyle from './styles';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp;
};

const AllPlaylists: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={AllPlaylistsStyle.container}>
      <Text>This is the all playlist screen</Text>
      <Button
        title="Go to Playlist"
        onPress={() => navigation.navigate('Playlist')}
      />
      <Button
        title="Go to Song Selection"
        onPress={() => navigation.navigate('SongSelection')}
      />
    </View>
  );
};

export default AllPlaylists;
