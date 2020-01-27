import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = ({ color }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: color,
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      color: 'white',
    },
    item: {
      padding: 10,
      color: 'white',
      fontSize: 18,
    },
    view: {
      padding: 10,
      borderBottomColor: Colors.white,
      borderBottomWidth: 2,
    },
  });

export default styles;
