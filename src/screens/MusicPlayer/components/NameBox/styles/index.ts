import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    margin: 20,
    backgroundColor: Colors.lightPrimary,
  },
  song: {
    textAlign: 'center',
    color: Colors.complementary,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  artist: {
    padding: 10,
    fontWeight: '300',
    color: Colors.complementary,
  },
});

export default styles;
