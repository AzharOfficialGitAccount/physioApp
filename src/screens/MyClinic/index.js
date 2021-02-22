import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles'
const logo = require('../../../assests/HomeScreen.jpeg');

const MyClinic = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image style={styles.image} source={logo} />

      <Text style={styles.text1}> About Our Clinic </Text>
      <Text style={styles.text2}> Our Specialised Packages: </Text>
      <Text style={styles.text3}> Low Back pain-- </Text>
      <Text style={styles.text4}> Don’t let constant back pain ruin your life. Opt for our comprehensive home-based physiotherapy services for long-lasting relief. </Text>

      <Text style={styles.text3}> Knee Pain Managment Services-- </Text>
      <Text style={styles.text4}> With our range of physiotherapy services for knee pain management, you can get back to walking, running or jogging quicker. </Text>
  
     </View>
  );
}

  export default MyClinic;

