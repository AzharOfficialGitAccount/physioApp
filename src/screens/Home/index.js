import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../../components';
import styles from './styles';
import {
  CONTACT_ROUTE,
  PROFILE_ROUTE,
  HOME_ROUTE,
  APPOINTMENTS_ROUTE,
  BOOK_APPOINTMENT_ROUTE,
  APPOINTMENT_STACK
} from '../../navigation/routes';
const physioImage = require('../../../assests/physio.png');
const nueroImage = require('../../../assests/Nuero.png');
const orthoImage = require('../../../assests/Ortho.png');
const sportsImage = require('../../../assests/sports.png');

const services = [
  {
    id: 1,
    image: physioImage,
    title: 'PHYSIOTHERAPY SERVICES @ CLINIC',
    time: '1 hr',
    price: '350',
  },
  {
    id: 2,
    image: nueroImage,
    title: 'ORTHOPAEDIC PHYSIOTHERAPY @ HOME VISIT',
    time: '1 hr',
    price: '700',
  },
  {
    id: 3,
    image: orthoImage,
    title: 'NEURO PHYSIOTHERAPY @ HOME VISIT',
    time: '1 hr',
    price: '700',
  },
  {
    id: 4,
    image: sportsImage,
    title: 'SPORTS PHYSIOTHERAPY @ HOME VISIT',
    time: '1 hr',
    price: '700',
  },
];

const Home = (props) => {
  const {navigation} = props;
  const _renderListItem = (item, index) => {
    const {image, title, time, price} = item || {};
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate(BOOK_APPOINTMENT_ROUTE);
      }}>
        <View style={styles.wrapper}>
          <Image source={image} style={styles.img} />
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{time}</Text>
          <Text style={styles.text}>{price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      {/* <Header title="Our Services" /> */}
      <FlatList
        data={services}
        renderItem={({item, index}) => _renderListItem(item, index)}
        numColumns={2}
      />
    </View>
  );
};
export default Home;
