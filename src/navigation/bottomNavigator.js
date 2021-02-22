import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Appointments, Contact, Profile, BookAppoinment, EditProfile, MyClinic} from '../screens';
import {
  CONTACT_ROUTE,
  PROFILE_ROUTE,
  HOME_ROUTE,
  APPOINTMENTS_ROUTE,
  BOOK_APPOINTMENT_ROUTE,
  APPOINTMENT_STACK,
  EDITPROFILE_ROUTE,
  MYCLINIC_ROUTE
} from './routes';

const home = require('../../assests/home.png');
const calendar = require('../../assests/calendar.png');
const phoneBook = require('../../assests/phone-book.png');
const userProfile = require('../../assests/user.png');

const Stack = createStackNavigator();

const AppointmentStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name={HOME_ROUTE} />
      <Stack.Screen component={BookAppoinment} name={BOOK_APPOINTMENT_ROUTE} />
      {/* <Stack.Screen component={Register} name={REGISTER_ROUTE} /> */}
    </Stack.Navigator>
  );
};
const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Profile} name={PROFILE_ROUTE} />
      <Stack.Screen component={EditProfile} name={EDITPROFILE_ROUTE} />
      <Stack.Screen component={MyClinic} name={MYCLINIC_ROUTE} />

      {/* <Stack.Screen component={Register} name={REGISTER_ROUTE} /> */}
    </Stack.Navigator>
  );
};


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = home;
          } else if (route.name === 'Appointments') {
            iconName = calendar;
          } else if (route.name === 'Contact') {
            iconName = phoneBook;
          } else if (route.name === 'Profile') {
            iconName = userProfile;
          }
          else if (route.name === 'EditProfile') {
            iconName = userProfile;
          }
          else if (route.name === 'MyClinic') {
            iconName = home;
          }
        
          const tintColor = focused ? 'green' : 'gray';
          return <Image source={iconName} style={{width: 30, height: 30}} tintColor={tintColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={APPOINTMENT_STACK} component={AppointmentStackNavigator} />
      <Tab.Screen name={APPOINTMENTS_ROUTE} component={Appointments} />
      <Tab.Screen name={CONTACT_ROUTE} component={Contact} />
      <Tab.Screen name={PROFILE_ROUTE} component={Profile} />
      <Tab.Screen name={EDITPROFILE_ROUTE} component={EditProfile} />
      <Tab.Screen name={MYCLINIC_ROUTE} component={MyClinic} />


    </Tab.Navigator>
  );
};

export default TabsNavigator;
