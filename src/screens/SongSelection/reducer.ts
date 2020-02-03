import { SongsInterface } from '../../interfaces';

/*
    Song Selection reducer
*/

const initialState = <SongsInterface[]>[
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
];

function songSelectionReducer(state = initialState, action) {
  return state;
}

export default songSelectionReducer;
