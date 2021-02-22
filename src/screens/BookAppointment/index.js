import React, {useState, createRef} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';

const BookAppoinment = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [mobNumber, setUserContact] = useState('');
  const [message, setUserMessage] = useState('');
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const userNameInputRef = createRef();
  const userEmailInputRef = createRef();
  const userMobNumberInputRef = createRef();
  const messageInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userEmail) {
      alert('Please fill email');
      return;
    }

    if (!mobNumber) {
      alert('Please fill contact');
      return;
    }

    if (!message) {
      alert('Please add your message');
      return;
    }
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      contact: mobNumber,
      message: message,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);

        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Pay to proceed');
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate()}>
          <Text style={styles.buttonTextStyle}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Text style={styles.text}> Add Your Info </Text>
        <Text style={styles.text}> Tell us a bit about yourself </Text>

        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userName) => setUserName(userName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={userNameInputRef}
              onSubmitEditing={() =>
                userNameInputRef.current && userNameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              keyboardType="email-address"
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              onSubmitEditing={() =>
                userEmailInputRef.current && userEmailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(mobNumber) => setUserContact(mobNumber)}
              underlineColorAndroid="#f000"
              placeholder="Enter  Mobile Number"
              placeholderTextColor="#8b9cb5"
              ref={userMobNumberInputRef}
              returnKeyType="next"
              keyboardType="numeric"
              onSubmitEditing={() =>
                userMobNumberInputRef.current &&
                userMobNumberInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(message) => setUserMessage(message)}
              underlineColorAndroid="#f000"
              placeholder="Add your Message"
              placeholderTextColor="#8b9cb5"
              ref={messageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                messageInputRef.current && messageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Pay Now</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default BookAppoinment;
