import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      color: '#228b22',
      textAlign: 'center',
      fontWeight: 'bold',
      marginHorizontal: 20,
      marginVertical: 40,
    },
    image: {
      justifyContent: 'center',
      alignSelf: 'center',
      width: width * 0.6,
      height: height * 0.2,
      resizeMode: 'contain'
    },
    account: {
      fontSize: 18,
      color: '#228b22',
      textAlign: 'center',
      fontWeight: 'bold',
      marginHorizontal: 20,
      marginVertical: 40,
    },
    customBtnText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      width: 200,
      height: 40,
      marginRight: 5,
    },
  
    customBtnBG: {
      alignSelf: 'center',
      backgroundColor: '#228b22',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 30,
      height: 40,
    },
  });

export default styles;