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
    },
    {
      key: 'enterMetallica',
      songName: 'Enter Sandman',
      artistName: 'Metallica',
    },
    {
      key: 'duckSongBryant',
      songName: 'The duck song',
      artistName: 'Bryant Oden',
    },
    {
      key: 'whatIsLoveHaddaway',
      songName: 'What is love?',
      artistName: 'Haddaway',
    },
  ],
  CurrentSong: <CurrentSongInterface>{
    songName: '',
    artistName: '',
    playlistKey: '',
  },
};

export default initialState;
