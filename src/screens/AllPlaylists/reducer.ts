/*
    All playlists reducer
*/
import { updatePlaylistWithSong } from './utils';
import { UPDATE_PLAYLIST } from '../Playlist/constants';
import { AllPlaylistsInterface, UpdatePlaylistAction } from '../../interfaces';

const initialState = <AllPlaylistsInterface>{
  danceAll: { name: 'Dance all', color: 'red', songs: [] },
  relaxation: { name: 'Relaxation', color: 'blue', songs: [] },
  roadTrip: { name: 'Road Trip', color: 'purple', songs: [] },
};

function allPlaylistsReducer(
  state: AllPlaylistsInterface = initialState,
  action: UpdatePlaylistAction,
): AllPlaylistsInterface {
  switch (action.type) {
    case UPDATE_PLAYLIST:
      return updatePlaylistWithSong(state, action);
    default:
      return state;
  }
}

export default allPlaylistsReducer;
