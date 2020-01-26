import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from '../reducers';

export { default as initialState } from './initialState';

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
