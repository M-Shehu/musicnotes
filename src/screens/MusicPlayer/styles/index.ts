import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';

const styles = ({ color }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: color,
      justifyContent: 'center',
    },
    nameBox: {
      flex: 1,
      borderRadius: 10,
      shadowOffset: { width: 0, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 8,
      margin: 20,
      backgroundColor: Colors.white,
    },
    controlPanel: {
      backgroundColor: Colors.darkPrimary,
      margin: 30,
      flex: 1,
    },
  });

export default styles;
