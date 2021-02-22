import React, { useState, createRef } from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { REGISTER_ROUTE, SIGNIN_ROUTE } from '../../navigation/routes';
import * as actions from '../../redux/actions';
const logo = require('../../../assests/p2.jpeg');

const Login = (props) => {
  const { navigation } = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = { email: userEmail, password: userPassword };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  const _onSignIn = () => {
    const { signIn } = props;
    signIn && signIn({});
  }


  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <Text style={styles.Text}> Sign In </Text>

          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={logo}

                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {

                _onSignIn();
                // navigation.navigate(REGISTER_ROUTE);
              }}>
              <Text style={styles.buttonTextStyle}>Continue</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate(REGISTER_ROUTE)}>
              New Here ? Register
              </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
// export default Login;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
const mapStateToProps = (state) => ({
  isLoggedIn: state.loginReducer.isLoggedIn,
  // fetchSuccess: state.subcategoryReducer.fetchSuccess,
  // fetchError: state.subcategoryReducer.fetchError,
  // apiError: state.subcategoryReducer.apiError,
  // subcategories: state.subcategoryReducer.subcategories,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

