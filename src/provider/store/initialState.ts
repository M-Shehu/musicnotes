import { AllPlaylistsInterface } from '../../interfaces';

const initialState = {
  AllPlaylists: <AllPlaylistsInterface>{
    danceAll: { name: 'Yoga', color: 'red', songs: [] },
    relaxation: { name: 'Relaxation', color: 'blue', songs: [] },
    roadTrip: { name: 'Road Trip', color: 'purple', songs: [] },
  },
  Songs: <string[]>[
    'Bohemian Rhapsody',
    'Enter Sandman',
    'The duck song',
    'What is love?',
  ],
};

export default initialState;
