import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AllPlaylistsScreen from './src/screens/AllPlaylists';
import PlaylistScreen from './src/screens/Playlist';
import SongSelectionScreen from './src/screens/SongSelection';

/**
 * React stack navigator is being used for the navigation as
 * advised by React native docs
 * @see {@link https://facebook.github.io/react-native/docs/navigation}
 */

const AppNavigator = createStackNavigator(
  {
    AllPlaylists: AllPlaylistsScreen,
    Playlist: PlaylistScreen,
    SongSelection: SongSelectionScreen,
  },
  {
    initialRouteName: 'AllPlaylists',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App(): React.ReactNode {
  return <AppContainer />;
}
