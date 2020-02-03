import { createStore } from 'redux';
import { USE_REDUX_PERSIST } from 'react-native-dotenv';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers';
/**
 * Async storage from the react-native library is being deprecated so
 * Async storage from the community is being used in its stead.
 * @see {@link https://facebook.github.io/react-native/docs/asyncstorage}
 */
import AsyncStorage from '@react-native-community/async-storage';

export { default as initialState } from './initialState';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default function configureStore(initialState = {}) {
  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const persistor = persistStore(store);
  persistor.flush();
  return { store, persistor };
}
