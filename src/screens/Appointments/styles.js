import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#7DE24E',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 15,
    },
    inputStyle: {
      flex: 1,
      color: 'black',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 15,
    },
    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 15,
      padding: 30,
    },
    text:{
      fontSize:20,
       color:`#00008b`,
       textAlign:'center',
        fontWeight:'bold',
        marginHorizontal:10,
        marginVertical:20
    },
    item: {
      width: Dimensions.get('window').width * 0.95,
      alignSelf: 'center',
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      backgroundColor: 'white',
      marginVertical: 5,
    }
  });

export default styles;