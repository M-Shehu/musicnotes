import { UPDATE_PLAYLIST } from '../screens/Playlist/constants';

export interface AllPlaylistsInterface {
  [prop: string]: { name: string; songs: string[]; color: string };
}

export interface StateInterface {
  AllPlaylists: AllPlaylistsInterface;
  Songs: string[];
}

export interface updatePlaylist {
  key: string;
  song: string;
}

export interface UpdatePlaylistAction {
  type: typeof UPDATE_PLAYLIST;
  payload: updatePlaylist;
}

export type NavigationOptionProps = {
  headerTitle?: ((screenProps?) => any) | string;
  headerRight?: (screenProps?) => any;
};
