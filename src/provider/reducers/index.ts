import { combineReducers } from 'redux';
import allPlaylistsReducer from '../../screens/AllPlaylists/reducer';
import songSelectionReducer from '../../screens/SongSelection/reducer';
import currentSongReducer from '../../screens/MusicPlayer/reducer';

const rootReducer = combineReducers({
  AllPlaylists: allPlaylistsReducer,
  Songs: songSelectionReducer,
  CurrentSong: currentSongReducer,
});

export default rootReducer;
