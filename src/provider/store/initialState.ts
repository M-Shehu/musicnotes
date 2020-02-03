import {
  AllPlaylistsInterface,
  CurrentSongInterface,
  SongsInterface,
} from '../../interfaces';

const initialState = {
  AllPlaylists: <AllPlaylistsInterface>{
    danceAll: { name: 'Yoga', color: 'red', songs: [] },
    relaxation: { name: 'Relaxation', color: 'blue', songs: [] },
    roadTrip: { name: 'Road Trip', color: 'purple', songs: [] },
  },
  Songs: <SongsInterface[]>[
    {
      key: 'bohemianQueen',
      songName: 'Bohemian Rhapsody',
      artistName: 'Queen',
      songPath: 'bohemian_rhapsody.mp3',
    },
    {
      key: 'enterMetallica',
      songName: 'Enter Sandman',
      artistName: 'Metallica',
      songPath: 'enter_sandman.mp3',
    },
    {
      key: 'duckSongBryant',
      songName: 'The duck song',
      artistName: 'Bryant Oden',
      songPath: 'duck_song.mp3',
    },
    {
      key: 'whatIsLoveHaddaway',
      songName: 'What is love?',
      artistName: 'Haddaway',
      songPath: 'what_is_love.mp3',
    },
  ],
  CurrentSong: <CurrentSongInterface>{
    songName: '',
    artistName: '',
    playlistKey: '',
    key: '',
    songPath: '',
  },
};

export default initialState;
