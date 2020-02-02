import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

export { default as initialState } from './initialState';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
