import { AllPlaylistsInterface, UpdatePlaylistAction } from '../../interfaces';
/**
 * Updates the playlist in the redux store with the chosen song
 * If the song already exists in the redux store, the song is removed
 * @param {Object} state - Redux state for All Playlists.
 * @param {Object} state[key] - This is the store for a particular playlist using the playlist key.
 * @param {String} state[key].name - This is the name of the playlist.
 * @param {String} state[key].color - This is the color of the playlist.
 * @param {Array} state[key].songs - This is an array of strings of all the songs in the playlist.
 * @param {Object} action - This is the Redux action object
 * @param {Object} action.payload - This is the payload of the Redux action object
 * @param {String} action.payload.key - This is the key of the playlist
 * @param {String} action.payload.song - This is the song being updated in the playlist
 * @returns {Object} - The updated state with the song
 */
export const updatePlaylistWithSong = (
  state: AllPlaylistsInterface,
  action: UpdatePlaylistAction,
) => {
  const { key, song } = action.payload;
  let playlist = state[key];
  if (playlist.songs.includes(song)) {
    playlist.songs.splice(playlist.songs.indexOf(song), 1);
  } else {
    playlist.songs = [...playlist.songs, song];
  }
  return { ...state, [key]: playlist };
};
