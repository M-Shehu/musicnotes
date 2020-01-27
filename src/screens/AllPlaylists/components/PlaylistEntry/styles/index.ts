import { StyleSheet } from 'react-native';

const styles = ({ color }) =>
  StyleSheet.create({
    touchable: {
      borderRadius: 10,
      margin: 20,
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: '#C7CCBD',
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
      fontSize: 15,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default styles;
