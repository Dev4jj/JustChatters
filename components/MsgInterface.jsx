import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, FlatList, KeyboardAvoidingView, Modal } from 'react-native';
import userImg from '../assets/user.png';
import phoneImg from '../assets/telephone.png';
import sendImg from '../assets/send (1).png'

export default function MsgInterface(){
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Warren Buffet', phoneNumber: '123-456-7890' },
        { id: 2, name: 'Barack Obama', phoneNumber: '123-456-7890' },
        { id: 3, name: 'Justin Trudaeu', phoneNumber: '123-456-7890' },
        { id: 4, name: 'Will Smith', phoneNumber: '123-456-7890' },
        { id: 5, name: 'Neil Armstrong', phoneNumber: '123-456-7890' },
        { id: 6, name: 'Michelle Obama', phoneNumber: '123-456-7890' },
        { id: 7, name: 'Elon Musk', phoneNumber: '123-456-7890' },
        { id: 8, name: 'Mark Zuckerberg', phoneNumber: '123-456-7890' },
        { id: 9, name: 'Jeff Bezos', phoneNumber: '123-456-7890' },
        { id: 10, name: 'Bill Gates', phoneNumber: '123-456-7890' },
        { id: 11, name: 'Donald Trump', phoneNumber: '123-456-7890' },
        { id: 12, name: 'Lebron James', phoneNumber: '123-456-7890' },
        { id: 13, name: 'Steve Jobs', phoneNumber: '123-456-7890' },
        { id: 14, name: 'Mark Cuban', phoneNumber: '123-456-7890' },
        { id: 15, name: 'Tony Robbins', phoneNumber: '123-456-7890' },
        { id: 16, name: 'Adam Sandler', phoneNumber: '123-456-7890' },
        { id: 17, name: 'Robert Herjavec', phoneNumber: '123-456-7890' },
        // Add more mock contacts as needed
      ]);

      const[search, setSearch] = useState('');
      const[openMsgs, setOpenMsgs] = useState(false);
      const[selectedContact, setSelectedContact] = useState(null);
      const [userMsg, setUserMsg] = useState('');
      const [showMsgs, setShowMsgs] = useState([]);
      

      const filterContacts = contacts.filter((contact) => {
       return(contact.name.toLowerCase().includes(search.toLowerCase()))
      })

      const displayItem = ({ item }) => (
        <TouchableOpacity
        style={styles.contactItem}
        onPress={() => {
          setSelectedContact(item.name);
          setOpenMsgs(true);
        }}>
          <Image source={userImg} style={{width: 30, height: 30}}/>
          <Text>{item.name}</Text>
          <Text>{item.phoneNumber}</Text>
        </TouchableOpacity>
      );

      const postMsg = () => {
        if (userMsg.trim() !== '') {
            setShowMsgs(prevMsg => [...prevMsg, userMsg]);
            setUserMsg('');
        }
    };


    return (
        
        <View style={styles.container}>
        { !openMsgs? (
        <View style={styles.contactList}>
        <View style={styles.contactHeader}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Contacts</Text> 
        <TouchableOpacity>
            <Text style={{fontSize: 30}}>+</Text>
        </TouchableOpacity>
      


        </View>
        <View style={{marginBottom: 40}}>
        <TextInput style={styles.searchInput} onChangeText={setSearch} value={search}/>
        <FlatList
        data={filterContacts}
        renderItem={displayItem}
        keyExtractor={item => item.id.toString()}
      />
      </View>
      <View style={styles.phoneImgContainer}>
      <Image source={phoneImg} style={styles.phoneImg}/>
      </View>
      </View>):(
            <View style={styles.msgContainer}>
            <View style={styles.msgHeader}>
            <TouchableOpacity onPress={() => {setOpenMsgs(false); setShowMsgs([])}}>
                <Text style={{fontSize: 40, marginRight:50}}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={{fontSize:20}}>{selectedContact}</Text>
            </View>
            <View style={{flexDirection:'row', margin:10,}}>
            <FlatList
                data={showMsgs}
                renderItem={({ item }) => <Text style={styles.sentMsgs}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}/>
            </View>
            <KeyboardAvoidingView style={styles.msgInputContainer} behavior='padding'>
            <TextInput style={styles.msgInput} placeholder='send a message...' value={userMsg} onChangeText={setUserMsg} onSubmitEditing={postMsg}/>
            <TouchableOpacity onPress={postMsg}>
                <Image source={sendImg} style={styles.sendBtn}/>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            <Image/>
            </View>)
        }
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
flex:1,
width:"100%",
    },
    contactList:{
flex: 1,
padding: 50,
    },
    contactHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
      searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
      contactItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      phoneImgContainer:{
        position: 'absolute',
        bottom: 20,
        right: 20,
      },
      phoneImg:{
        width: 70,
        height: 70,
      },
      msgContainer:{
        flex: 1,
        padding: 50,
      },
      msgHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
      },
      sentMsgs:{
        fontSize: 15,
        backgroundColor: '#1565c0',
        color: '#fff',
        margin:1,
        padding:7,
        borderRadius:15,
        overflow: 'hidden',
      },
      msgInputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom:20,
        left: 0,
        right:0,
        justifyContent:'center',
        paddingHorizontal:30,
    },
      msgInput:{
        borderWidth:1,
        width: '100%',
        height: 50,
        borderRadius:20,
        paddingLeft:10,
      },
      sendBtn:{width:30,
        height: 30,
        marginLeft:5,
        }
  });
  