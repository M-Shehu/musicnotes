import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from 'react-native-splash-screen';

import AllPlaylistsScreen from './src/screens/AllPlaylists';
import PlaylistScreen from './src/screens/Playlist';
import SongSelectionScreen from './src/screens/SongSelection';
import configureStore, { initialState } from './src/provider/store';
import { Colors } from './src/constants';

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
    /* defaultNavigationOptions for setting up the header styles */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
  },
);
const AppContainer = createAppContainer(AppNavigator);

/**
 * The store is being initialized with initial state that defines the playlists
 * and songs being used in the app. The initial state of the number of playlists
 * and songs can not be modified
 */
const store = configureStore(initialState);

export default function App(): React.ReactNode {
  // Hide SplashScreen as soon as App start
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
