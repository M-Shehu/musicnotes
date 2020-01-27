import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  selectedTag: {
    padding: 10,
    fontSize: 12,
    fontStyle: 'italic',
    color: 'blue',
  },
  view: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
