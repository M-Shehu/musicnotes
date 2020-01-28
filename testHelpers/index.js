import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducer from '../src/provider/reducers';

import { render, fireEvent } from '@testing-library/react-native';

const defaultStore = createStore(rootReducer);
export function renderWithNavigation({
  screens = {},
  navigatorConfig = {},
} = {}) {
  const AppNavigator = createStackNavigator(
    {
      ...screens,
    },
    { initialRouteName: `${Object.keys(screens)[0]}`, ...navigatorConfig },
  );

  const App = createAppContainer(AppNavigator);

  return { ...render(addRedux(<App />)), navigationContainer: App };
}

export function addRedux(ui, store = defaultStore) {
  return <Provider store={store}>{ui}</Provider>;
}

export function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) {
  return {
    ...render(addRedux(ui, store)),
    store,
  };
}
