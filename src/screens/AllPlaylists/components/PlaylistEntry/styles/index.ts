import { StyleSheet } from 'react-native';

const styles = ({ color }) =>
  StyleSheet.create({
    touchable: {
      borderRadius: 10,
      margin: 10,
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
      width: '5%',
      height: '100%',
      backgroundColor: color,
    },
    textBox: {},
    text: {},
  });

export default styles;
