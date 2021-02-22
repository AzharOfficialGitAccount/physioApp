import React, {useState, createRef} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';

import styles from './styles';
import {Header} from '../../components';

const previousAppointents = [{
  id: 1,
  physioTherapistName: 'Raghupati Jadhav',
  date: '12 Jan 2021',
  time: '10:30 AM',
},
{
  id: 2,
  physioTherapistName: 'Abhishek Kumar',
  date: '10 March 2021',
  time: '10:30 AM',
},{
  id: 3,
  physioTherapistName: 'Anita Solanki',
  date: '02 Jan 2021',
  time: '10:30 AM',
},{
  id: 4,
  physioTherapistName: 'Vikash Raghupati',
  date: '12 Jan 2021',
  time: '10:30 AM',
},{
  id: 5,
  physioTherapistName: 'Anuj Shukla',
  date: '03 Jan 2021',
  time: '11:30 AM',},
  {
    id: 6,
    physioTherapistName: 'Shalini Agorkar',
    date: '06 Jan 2021',
    time: '02:30 PM',}];

const Register = (props) => {

  const _renderItem = (item, index) => {
    const {physioTherapistName, date, time} = item;
    return (
      <View style={styles.item}>
        <Text>{physioTherapistName}</Text>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
    );
  }
  
  return (
    <View style={{ backgroundColor: 'white', flex: 1}}>
      <Header title="Appointments" />
      <FlatList 
        data={previousAppointents} 
        renderItem={({item, index}) => _renderItem(item, index)}
      />
    </View>
  );
};
export default Register;

