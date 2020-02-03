/*
 *
 * MusicPlayer actions
 *
 */

import { UPDATE_CURRENT_SONG } from './constants';
import {
  CurrentSongInterface,
  UpdateCurrentSongAction,
} from '../../interfaces';

export function updateCurrentSong(
  newSongObject: CurrentSongInterface,
): UpdateCurrentSongAction {
  return {
    type: UPDATE_CURRENT_SONG,
    payload: newSongObject,
  };
}
