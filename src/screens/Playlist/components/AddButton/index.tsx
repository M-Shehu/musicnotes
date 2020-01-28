/**
 * AddButton Component
 *
 * This is the plus button on the Playlist screen
 */

import React from 'react';
import { Text, TouchableHighlight, Button } from 'react-native';
import AddButtonStyle from './styles';
import { Colors } from '../../../../constants';

type Props = {
  /** the function runs when add playlist button is clicked */
  onAddSong: () => any;
};

const AddButton: React.FC<Props> = ({ onAddSong }) => {
  return (
    <Button
      testID="addButton"
      onPress={onAddSong}
      color={Colors.white}
      title="Add"
    />
  );
};

export default AddButton;
