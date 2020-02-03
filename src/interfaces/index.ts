import { UPDATE_PLAYLIST } from '../screens/Playlist/constants';
import { UPDATE_CURRENT_SONG } from '../screens/MusicPlayer/constants';

export interface AllPlaylistsInterface {
  // All playlist is saved in an object instead of an array for
  // instant lookup of playlists
  [prop: string]: PlaylistInterface;
}

export interface PlaylistInterface {
  name: string;
  songs: SongsInterface[];
  color: string;
}

export interface StateInterface {
  AllPlaylists: AllPlaylistsInterface;
  Songs: SongsInterface[];
  CurrentSong: CurrentSongInterface;
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
export interface SongsInterface {
  key: string;
  songName: string;
  artistName: string;
}

export interface CurrentSongInterface extends SongsInterface {
  playlistKey: string;
}

export interface UpdateCurrentSongAction {
  type: typeof UPDATE_CURRENT_SONG;
  payload: CurrentSongInterface;
}
