import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  text1: {
    fontSize: 25,
    color: '#228b22',
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  text2: {
    fontSize: 20,
    color: '#00008b',
    textAlign: 'center',
    // fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  text3: {
    fontSize: 20,
    color: '#00008b',
    textAlign: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  text4: {
    fontSize: 18,
    color: '#006400',
    textAlign: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.6,
    height: height * 0.2,
    resizeMode: 'contain'
  },
});

export default styles;