import {StyleSheet, Dimensions} from 'react-native';
import { c } from '../../utils';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flexDirection:'row',
    width: width,
    height: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
    tintColor: c.WHITE
  }
});

export default styles;