import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function SkipBack() {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 44.022 44.022"
      style={{ transform: [{ scaleX: -1 }] }}>
      <Path
        d="m42.511,.011h-6c-0.553,0-1,0.447-1,1v42c0,0.553 0.447,1 1,1h6c0.553,0 1-0.447 1-1v-42c0-0.552-0.447-1-1-1zm-1,42h-4v-40h4v40zm-39.278-41.719c-0.394-0.389-1.032-0.389-1.427-1.60982e-15-0.199,0.196-0.296,0.454-0.293,0.71 0,0.003-0.002,0.006-0.002,0.009v42c0,0.003 0.002,0.006 0.002,0.009-0.003,0.257 0.094,0.515 0.293,0.711 0.395,0.389 1.033,0.389 1.427,0l30.963-20.99c0.393-0.388 0.393-1.018 0-1.405l-30.963-21.044zm.278,40.881v-38.321l28.309,19.186-28.309,19.135z"
        fill="#fff"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
