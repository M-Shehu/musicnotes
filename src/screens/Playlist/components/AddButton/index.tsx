/**
 * AddButton Component
 *
 * This is the plus button on the Playlist screen
 */

import React from 'react';
import { Text, TouchableHighlight, Button } from 'react-native';
import AddButtonStyle from './styles';

type Props = {
  /** the function runs when add playlist button is clicked */
  onAddSong: () => any;
};

const AddButton: React.FC<Props> = ({ onAddSong }) => {
  // This is being used to pass the color of the playlist down to the styles
  return <Button onPress={onAddSong} title="Add" />;
};

export default AddButton;
