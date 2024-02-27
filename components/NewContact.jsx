import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native';

export default function NewContactForm(){

const[modalVisible, setModalVisible] = useState(false);

    return(
        <View>
        <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={()=>{
            setModalVisible(!modalVisible);
        }}
        >
        <Text>New Contact</Text>
            <TextInput placeholder='Name'/>
            <TextInput placeholder='Phone Number'/>
        </Modal>
        </View>
  
    )
}