/*
    All playlists reducer
*/
import { updatePlaylistWithSong } from './utils';
import { UPDATE_PLAYLIST } from '../Playlist/constants';

function allPlaylistsReducer(state, action) {
  switch (action.type) {
    case UPDATE_PLAYLIST:
      return updatePlaylistWithSong(state, action);
    default:
      return state;
  }
}

export default allPlaylistsReducer;
