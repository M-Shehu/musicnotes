/*
 *
 * Playlist actions
 *
 */

import { UPDATE_PLAYLIST } from './constants';

export function updatePlaylist(key, song) {
  return {
    type: UPDATE_PLAYLIST,
    payload: { key, song },
  };
}
