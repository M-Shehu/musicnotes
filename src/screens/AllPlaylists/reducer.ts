/*
    All playlists reducer
*/
import { updatePlaylistWithSong } from './utils';
import { UPDATE_PLAYLIST } from '../Playlist/constants';
import { AllPlaylistsInterface } from '../../provider/store/stateInterfaces';

const initialState = <AllPlaylistsInterface>{
  danceAll: { name: 'Dance all', color: 'red', songs: [] },
  relaxation: { name: 'Relaxation', color: 'blue', songs: [] },
  roadTrip: { name: 'Road Trip', color: 'yellow', songs: [] },
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
