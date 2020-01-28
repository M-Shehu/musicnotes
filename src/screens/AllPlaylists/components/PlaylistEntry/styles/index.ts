import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants';

const styles = ({ color }) =>
  StyleSheet.create({
    touchable: {
      borderRadius: 10,
      shadowOffset: { width: 0, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 8,
      margin: 20,
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: Colors.white,
    },
    container: {
      flexDirection: 'row',
      height: 100,
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
    colorBox: {
      height: '100%',
      flex: 1,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: color,
    },
    playlistName: {
      flex: 4,
    },
    noOfSongs: {
      flex: 1,
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    textTitle: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '100',
      marginBottom: 20,
    },
  });

export default styles;
