/**
 * NameBox Component
 *
 * This component shows the name of the song and the name of the artist
 */

import React from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import NameBoxStyle from './styles';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  /** Name of the playlist */
  playlistName: string;
  /** The name of the song */
  songName: string;
  /** the name of the song artist */
  artistName: string;
};

const NameBox: React.FC<Props> = ({ songName, artistName }) => {
  return <View style={NameBoxStyle.container}></View>;
};

export default NameBox;
