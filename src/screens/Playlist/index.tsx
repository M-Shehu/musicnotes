/**
 * Playlist Screen
 *
 * This screen shows the playlist screen with the songs its comprised of
 */

import React from 'react';
import { Text, View } from 'react-native';
import PlaylistStyle from './styles';

const Playlist: React.FC = () => {
  return (
    <View style={PlaylistStyle.container}>
      <Text>This is the playlist screen</Text>
    </View>
  );
};

export default Playlist;
