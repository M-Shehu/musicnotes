import { combineReducers } from 'redux';
import allPlaylistsReducer from '../../screens/AllPlaylists';

const rootReducer = combineReducers({
  AllPlaylists: allPlaylistsReducer,
});

export default rootReducer;
