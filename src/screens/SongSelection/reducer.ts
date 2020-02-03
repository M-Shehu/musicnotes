import { SongsInterface } from '../../interfaces';

/*
    Song Selection reducer
*/

const initialState = <SongsInterface[]>[
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
];

function songSelectionReducer(state = initialState, action) {
  return state;
}

export default songSelectionReducer;
