import {StyleSheet, Dimensions} from 'react-native';
import c from '../../utils/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    width: width * 0.5,
    // height: height * 0.4,
    alignItems: 'center',
    backgroundColor: c.WHITE,
    borderRadius: 5,
    // elevation: 2,
    // padding: 5,
    elevation: 5,
    margin: 5
  },
  img: {
   width: '100%',
   height: 200,
   resizeMode: 'cover',
  },
  text: {
    color: c.GREEN,
    fontSize: 14,
    textAlign: 'left',
    paddingHorizontal:5,
  }
});

export default styles;