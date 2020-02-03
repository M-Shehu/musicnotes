/**
 * ControlPanel Component
 *
 * This component shows the controls for the music player. Play pause and other controls
 */

import React from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import ControlPanelStyle from './styles';

type Props = {
  /** The handler function to skip to the next song in the playlist */
  onSkipNext: () => null;
  /** The handler function to play or pause the current track */
  onPlayPause: () => null;
  /** The handler function to skip to the previous song in the playlist  */
  onSkipBack: () => null;
};

const ControlPanel: React.FC<Props> = ({
  onSkipNext,
  onPlayPause,
  onSkipBack,
}) => {
  return <View style={ControlPanelStyle.container}></View>;
};

export default ControlPanel;
