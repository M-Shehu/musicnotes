export const updatePlaylistWithSong = (state, action) => {
  const { key, song } = action;
  return [...state[key].songs, song];
};
