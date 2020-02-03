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
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 2,
    },
    controlPanel: {
      margin: 30,
      flex: 1,
    },
  });

export default styles;
