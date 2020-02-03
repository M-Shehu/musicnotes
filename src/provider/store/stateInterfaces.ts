import { SongsInterface } from '../../interfaces';

export interface AllPlaylistsInterface {
  [prop: string]: { name: string; songs: SongsInterface[]; color: string };
}
