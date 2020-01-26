import { AllPlaylists } from './stateInterfaces';

const initialState = {
  AllPlaylists: <AllPlaylists>{
    danceAll: { name: 'Dance all', songs: [] },
    relaxation: { name: 'Relaxation', songs: [] },
    roadTrip: { name: 'Road Trip', songs: [] },
  },
  Songs: <string[]>['Bohemian Rhapsody', 'Enter Sandman', 'Happy', 'Queen'],
};

export default initialState;
