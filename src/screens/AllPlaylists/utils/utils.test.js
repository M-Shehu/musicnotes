import { updatePlaylistWithSong } from './index';

describe('AllPlaylists Reducer Util function', () => {
  let state;
  beforeEach(() => {
    state = {
      best: { songs: ['What does the fox say', 'What is love?', 'Baby'] },
    };
  });

  it('should add song to array when song doesnt exist in playlist', () => {
    const action = { payload: { key: 'best', song: 'Call me maybe' } };
    expect(updatePlaylistWithSong(state, action).best.songs).toContain(
      'Call me maybe',
    );
  });

  it('should remove song from array when song exist in playlist', () => {
    const action = { payload: { key: 'best', song: 'What is love?' } };
    expect(updatePlaylistWithSong(state, action).best.songs).not.toContain(
      'What is love?',
    );
  });
});
