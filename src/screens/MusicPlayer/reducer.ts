/*
    Music Player reducer
*/
import { UPDATE_CURRENT_SONG } from './constants';
import {
  CurrentSongInterface,
  UpdateCurrentSongAction,
} from '../../interfaces';

const initialState = <CurrentSongInterface>{
  songName: '',
  artistName: '',
  playlistKey: '',
};

export default function currentSongReducer(
  state: CurrentSongInterface = initialState,
  action: UpdateCurrentSongAction,
): CurrentSongInterface {
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
