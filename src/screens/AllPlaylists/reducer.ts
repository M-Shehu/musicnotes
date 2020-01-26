/*
    All playlists reducer
*/
import { updatePlaylistWithSong } from './utils';
import { UPDATE_PLAYLIST } from '../Playlist/constants';
import { AllPlaylists } from '../../provider/store/stateInterfaces';

const initialState = <AllPlaylists>{
  danceAll: { name: 'Dance all', songs: [] },
  relaxation: { name: 'Relaxation', songs: [] },
  roadTrip: { name: 'Road Trip', songs: [] },
};

function allPlaylistsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYLIST:
      return updatePlaylistWithSong(state, action);
    default:
      return state;
  }
}

export default allPlaylistsReducer;
