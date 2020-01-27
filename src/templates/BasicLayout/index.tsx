import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import BasicLayoutStyles from './styles';

type Props = {
  /** navigation prop used for routing to other screens */
  children: React.ReactNode;
};

const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {children}
    </>
  );
};

export default BasicLayout;
