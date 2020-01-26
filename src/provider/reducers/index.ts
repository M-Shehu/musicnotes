import { combineReducers } from 'redux';
import allPlaylistsReducer from '../../screens/AllPlaylists/reducer';
import songSelectionReducer from '../../screens/SongSelection/reducer';

const rootReducer = combineReducers({
  AllPlaylists: allPlaylistsReducer,
  Songs: songSelectionReducer,
});

export default rootReducer;
