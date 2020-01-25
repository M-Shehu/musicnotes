/**
 * SongSelection Screen
 *
 * This screen is used to select the songs that go into a playlist
 */

import React from 'react';
import { Text, View } from 'react-native';
import SongSelectionStyle from './styles';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  /** navigation prop used for routing to other screens */
  navigation: NavigationStackProp;
};

const SongSelection: React.FC<Props> = () => {
  return (
    <View style={SongSelectionStyle.container}>
      <Text>This is the song selection screen</Text>
    </View>
  );
};

export default SongSelection;
