/**
 * ControlPanel Component
 *
 * This component shows the controls for the music player. Play pause and other controls
 */

import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import ControlPanelStyle from './styles';
import SkipForward from '../../../../components/Icons/SkipForward';
import Pause from '../../../../components/Icons/Pause';
import SkipBack from '../../../../components/Icons/SkipBack';
import Play from '../../../../components/Icons/Play';

type Props = {
  /** The handler function to skip to the next song in the playlist */
  onSkipNext: () => null;
  /** The handler function to play or pause the current track */
  onPlayPause: () => void;
  /** The handler function to skip to the previous song in the playlist  */
  onSkipBack: () => null;
  /** The state if a song is playing or not */
  playState: string;
};

const ControlPanel: React.FC<Props> = ({
  onSkipNext,
  onPlayPause,
  onSkipBack,
  playState,
}) => {
  return (
    <View style={ControlPanelStyle.container}>
      <TouchableOpacity onPress={onSkipBack} style={ControlPanelStyle.buttons}>
        <SkipBack />
      </TouchableOpacity>
      {playState === 'paused' ? (
        <TouchableOpacity
          onPress={onPlayPause}
          style={ControlPanelStyle.buttons}>
          <Play />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPlayPause}
          style={ControlPanelStyle.buttons}>
          <Pause />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onSkipNext} style={ControlPanelStyle.buttons}>
        <SkipForward />
      </TouchableOpacity>
    </View>
  );
};

export default ControlPanel;
