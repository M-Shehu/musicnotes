import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Pause() {
  return (
    <Svg viewBox="0 0 44 44" width="100%" height="100%">
      <Path
        fill-rule="evenodd"
        d="m18,0h-10c-0.553,0-1,0.447-1,1v42c0,0.553 0.447,1 1,1h10c0.553,0 1-0.447 1-1v-42c0-0.553-0.447-1-1-1zm-1,42h-8v-40h8v40zm19-42h-10c-0.553,0-1,0.447-1,1v42c0,0.553 0.447,1 1,1h10c0.553,0 1-0.447 1-1v-42c0-0.553-0.447-1-1-1zm-1,42h-8v-40h8v40z"
        fill="#fff"
      />
    </Svg>
  );
}
