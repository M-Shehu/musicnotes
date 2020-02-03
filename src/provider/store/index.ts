import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { USE_REDUX_PERSIST } from 'react-native-dotenv';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

export { default as initialState } from './initialState';

let persistedReducer;
if (USE_REDUX_PERSIST === 'true') {
  /**
   * Async storage from the react-native library is being deprecated so
   * Async storage from the community is being used in its stead. Expo
   * still relies on the soon-to-be-deprecated library hence the import
   * @see {@link https://facebook.github.io/react-native/docs/asyncstorage}
   */
  const AsyncStorage = require('@react-native-community/async-storage');
  const OldAsyncStorage = require('react-native');
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage || OldAsyncStorage || storage,
  };
  persistedReducer = persistReducer(persistConfig, rootReducer);
}

export default function configureStore(initialState = {}) {
  const store = createStore(
    USE_REDUX_PERSIST === 'true' ? persistedReducer : rootReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const persistor = USE_REDUX_PERSIST === 'true' ? persistStore(store) : null;
  return { store, persistor };
}
