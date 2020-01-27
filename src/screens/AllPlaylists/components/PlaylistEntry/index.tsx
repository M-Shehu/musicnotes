/**
 * PlaylistEntry Component
 *
 * This components is the entry for all playlist names
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import PlaylistEntryStyleFunc from './styles';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  /** color of the playlist */
  color: string;
  /** Name of the playlist */
  playlistName: string;
  /** number of songs within the playlist */
  numberOfSongs: number;
  /** the function that runs when an entry is clicked */
  onOpenPlaylist: () => boolean;
};

const PlaylistEntry: React.FC<Props> = ({
  color,
  playlistName,
  numberOfSongs,
  onOpenPlaylist,
}) => {
  // This is being used to pass the color of the playlist down to the styles
  const PlaylistEntryStyle = PlaylistEntryStyleFunc({ color });
  return (
    <TouchableHighlight
      onPress={onOpenPlaylist}
      underlayColor="white"
      style={PlaylistEntryStyle.touchable}>
      <View style={PlaylistEntryStyle.container}>
        <View style={PlaylistEntryStyle.colorBox}></View>
        <View style={PlaylistEntryStyle.textBox}>
          <Text style={PlaylistEntryStyle.text}>{playlistName}</Text>
        </View>
        <View style={PlaylistEntryStyle.textBox}>
          <Text style={PlaylistEntryStyle.text}>{numberOfSongs}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default PlaylistEntry;
