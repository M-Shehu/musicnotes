export interface AllPlaylistsInterface {
  [prop: string]: { name: string; songs: string[]; color: string };
}

export type NavigationOptionProps = {
  headerTitle?: ((screenProps?) => any) | string;
  headerRight?: (screenProps?) => any;
};
