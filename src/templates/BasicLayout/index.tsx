import React from 'react';
import { StatusBar, Platform } from 'react-native';
import BasicLayoutStyles from './styles';

type Props = {
  /** navigation prop used for routing to other screens */
  children: React.ReactNode;
};

const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      {children}
    </>
  );
};

export default BasicLayout;
