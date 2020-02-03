import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
