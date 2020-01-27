/**
 * PlusIcon
 */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { TouchableHighlight } from 'react-native-gesture-handler';

type Props = {
  /** the function runs when the plus button is clicked */
  onPress: () => any;
};

const PlusIcon: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Svg height="1024" width="768">
        <Path d="M640 192L256 576 128 448 0 576l256 256 512-512L640 192z" />
      </Svg>
    </TouchableHighlight>
  );
};

export default PlusIcon;
