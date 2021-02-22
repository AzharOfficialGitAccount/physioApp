import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {REGISTER_ROUTE, SIGNIN_ROUTE} from '../../navigation/routes';
const logo = require('../../../assests/HomeScreen.jpeg');

const Welcome = (props) => {
  const {navigation} = props;
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image style={styles.image} source={logo} />

      <Text style={styles.text}> PHYSIOTHERAPY </Text>

      <Text style={styles.text}> Welcome </Text>

      <TouchableOpacity
        style={styles.customBtnBG}
        onPress={() => {
          navigation.navigate(REGISTER_ROUTE);
        }}>
        <Text style={styles.customBtnText}>Create Your Account</Text>
      </TouchableOpacity>

      <Text style={styles.account}> Already have an account? </Text>

      <TouchableOpacity
        style={styles.customBtnBG}
        onPress={() => {
          navigation.navigate(SIGNIN_ROUTE);
        }}>
        <Text style={styles.customBtnText}>Sign in Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
