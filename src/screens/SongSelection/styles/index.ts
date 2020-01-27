import { StyleSheet } from 'react-native';

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
});

export default styles;
