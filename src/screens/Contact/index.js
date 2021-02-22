import React, {useState, createRef} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles'
const logo = require('../../../assests/p2.jpeg');

const Contact = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [errortext, setErrortext] = useState('');
  const [
    isContactSuccess,
    setIsContactSuccess
  ] = useState(false);
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const subjectInputRef = createRef();
  const messageInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please Enter Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userSubject) {
      alert('Please fill Subject');
      return;
    }
    if (!userMessage) {
      alert('Type your message here..');
      return;
    }
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
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        if (responseJson.status === 'success') {
          setIsContactSuccess(true);
          console.log(
            'Contact Successful. Please Payment to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  if (isContactSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={logo}
          style={{
            height: 170,
            width: 20,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Contact Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('PayementGateway')}>
          <Text style={styles.buttonTextStyle}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
       <Text style={styles.Text}> Contact Us </Text>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={logo}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userName) => setUserName(userName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              ref={nameInputRef}
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                nameInputRef.current && nameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              keyboardType="email-address"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              ref={emailInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userSubject) =>
                setUserSubject(userSubject)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter  your subject"
              placeholderTextColor="#8b9cb5"
              ref={subjectInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                subjectInputRef.current &&
                subjectInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userMessage) => setUserMessage(userMessage)}
              underlineColorAndroid="#f000"
              placeholder="type your message here.."
              placeholderTextColor="#8b9cb5"
              ref={messageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                messageInputRef.current &&
                messageInputRef.current.focus()
              }
              blurOnSubmit={false}
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
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default Contact;