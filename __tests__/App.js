import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react-native';

import AllPlaylists from '../src/screens/AllPlaylists';
import Playlist from '../src/screens/Playlist';
import SongSelection from '../src/screens/SongSelection';
import initialState from '../src/provider/store/initialState';

import { renderWithNavigation } from '../testHelpers';

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    MaskedView: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

const allPlaylists = initialState.AllPlaylists;

describe('<App />', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = renderWithNavigation({
      screens: { AllPlaylists, Playlist, SongSelection },
    });
  });

  it('should render App correctly without errors', async () => {
    expect(renderedApp).not.toBe(undefined);
  });

  it('Should have an initial route of All Playlist', async () => {
    const { findByText } = renderedApp;
    await expect(findByText('All Playlist')).toBeTruthy();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderedApp;
    expect(firstChild).toMatchSnapshot();
  });
});

describe('<AllPlaylists />', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = renderWithNavigation({
      screens: { AllPlaylists, Playlist, SongSelection },
    });
  });

  it('Should contain 3 playlists in total', async () => {
    const { queryAllByTestId } = renderedApp;
    await expect(queryAllByTestId('entry-', { exact: false }).length).toBe(3);
  });

  it('Should contain all 3 playlists names in the initial state', async () => {
    const { findByText } = renderedApp;
    Object.keys(allPlaylists).forEach(async key => {
      await expect(findByText(allPlaylists[key].name)).toBeTruthy();
    });
  });
});

describe('<Playlist />', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = renderWithNavigation({
      screens: { AllPlaylists, Playlist, SongSelection },
    });
  });

  it('Should navigate into a playlist when clicked', async () => {
    const { findByText, getByTestId } = renderedApp;
    fireEvent.press(getByTestId(`entry-${Object.keys(allPlaylists)[0]}`));
    await expect(findByText(Object.keys(allPlaylists)[0].name)).toBeTruthy();
  });

  it.skip('Should contain the number of songs shown in the all playlist screen', async () => {
    const { getByTestId, queryAllByTestId } = renderedApp;
    fireEvent.press(getByTestId(`entry-${Object.keys(allPlaylists)[0]}`));
    await expect(queryAllByTestId(`addedSong`, { exact: false }).length).toBe(
      Object.keys(allPlaylists)[0].songs.length,
    );
  });
});
