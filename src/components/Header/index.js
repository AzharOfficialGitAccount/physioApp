import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {c} from '../../utils';

const backArrow = require('../../../assests/back-button.png');

import styles from './styles';
// import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';  

const Header = (props) => {
  const {title, onPress, navigation} = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        {/* <Image source={backArrow} style={styles.img} tintColor={c.WHITE} /> */}
      </TouchableOpacity>
      <Text style={{ alignSelf:'center', fontSize:20, color:'green'}}>{title}</Text>
      <View />
    </View>
  );
}

export default Header;