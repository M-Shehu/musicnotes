import { AllPlaylistsInterface } from '../../interfaces';

const initialState = {
  AllPlaylists: <AllPlaylistsInterface>{
    danceAll: { name: 'Dance all', color: 'red', songs: [] },
    relaxation: { name: 'Relaxation', color: 'blue', songs: [] },
    roadTrip: { name: 'Road Trip', color: 'yellow', songs: [] },
  },
  Songs: <string[]>['Bohemian Rhapsody', 'Enter Sandman', 'Happy', 'Queen'],
};

export default initialState;
