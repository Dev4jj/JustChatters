
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import logo from './assets/interface.png';
import MsgInterface from './components/MsgInterface';



export default function App() {
  const[showMsgs, setShowMsgs] = useState(false);

function loginAccess(){
setShowMsgs(!showMsgs);
}

  return (
    <View style={styles.container}>
  {!showMsgs? (
    <KeyboardAvoidingView style={styles.loginPage} behavior='padding'>
    <Image source={logo} style={styles.logo}/>
      <Text style={styles.appName}>JustChatters</Text>
      <View style={styles.loginForm}>
        <TextInput placeholder='Email' style={styles.loginInput}></TextInput>
        <TextInput placeholder='Password'style={styles.loginInput}></TextInput>
        <TouchableOpacity style={styles.loginBtn} onPress={loginAccess}><Text style={{color:"white"}}>Login</Text></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>) :
    (
      <MsgInterface />
      )
  }
    </View>

    
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
},
loginPage:{
  width:'100%',
  justifyContent: 'center',
  alignItems: 'center',
},
logo:{
width:150,
height: 150,
},
appName:{
  fontSize: 20
},
loginForm:{
  margin: 50,
  width: "80%"
},
loginInput:{
  borderBottomColor: "grey",
  borderBottomWidth: 1,
  padding:15,
},
loginBtn:{
  alignItems: "center",
  backgroundColor: "#1565c0",
  padding:10,
  marginTop: 30,
  borderRadius: 20,
}

});
