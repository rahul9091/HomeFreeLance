//import liraries
import React, {useEffect,useState} from 'react';
import { View, Text, StyleSheet, Button,  Modal,Alert,FlatList,Pressable,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

import {useDispatch,useSelector} from 'react-redux'

import {fetchData, passData} from '../redux/action/data'


var ids;

const MainScreen = () => {
  const [modalVisible,setModalVisible] = useState(false)
  const [text,setText]=  useState('');
  const [array,setArray] = useState([]);
  const [modalTitle,setModalTitle] = useState('')
  const [designation,setDesignation] = useState('')
  const [department,setDepartment] = useState('')
  const [isValid,setIsValid] = useState(true)
  const [isValidDes,setIsValidDes] = useState(true)


const dispatch = useDispatch()

 const updateName = (modalTitle,ids,designation,department) => {
   
  if((isValidDes === true && isValid === true)){
    alert(true)
    dispatch(passData(modalTitle,ids,designation,department))
    setModalVisible(false)
  }else{
    alert('Invalid Credential')
  }

   
 }


  const openSettingsModal = (id,name,Designation,Department) => {
    setModalTitle(name);
    setDesignation(Designation)
    setDepartment(Department)
    setModalVisible(!modalVisible);
     ids = id
}

const renderItem =({item,index})=> {
  return (
    <TouchableOpacity onPress={()=>{openSettingsModal(item.id,item.Name,item.Designation,item.Department)}}>
    <View style={styles.container}>
        <View style={{flexDirection:'column'}}>
      <Image style={{height:75,width:75}} source={{uri:item.image}}/>
      <Text numberOfLines={1} style={{position:'absolute',fontSize:15,color:'white',padding:13,marginLeft:14}}>{item.Name}</Text>
      <Text numberOfLines={1} style={{position:'absolute',fontSize:13,padding:20,marginTop:10}}>{item.Designation}</Text>
      <Text  style={{position:'absolute',fontSize:9,padding:25,marginTop:20}}>{item.Department}</Text>

      </View>
    </View>
    </TouchableOpacity>
  )
}

const {apiData} = useSelector(state=>state.dataReducer)

const titleValid = (text) => {  
  const reg = (/^[a-zA-Z]+$/g)
  setModalTitle(text)
  
  if((modalTitle.length < 10  && reg.test(modalTitle))){
    setIsValid(true)
    
  }else if(modalTitle.length > 10){
    setIsValid(false)
  }
  else if(reg.test(modalTitle) == false){
    setIsValid(false)
  }
  
}

const designationValid = (text) => {
  setDesignation(text);
  const reg = (/^[a-zA-Z]+$/g)

  if((designation.length < 30  && reg.test(designation))){
    setIsValidDes(true)
    
  }else if(designation.length  > 30){
    setIsValidDes(false)
  }
  else if(reg.test(designation) == false){
    setIsValidDes(false)
  }

}

  return(
  <View style={styles.container2}>
   <FlatList
    data={apiData}
    keyExtractor={item => item.id}
    renderItem={renderItem}
    numColumns={5}
    />
    <Modal
        animationType="slide"
        // transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View >
        {isValid ? null : <Text style={{fontSize:17,color:"red"}}> Name should be max 10 Char and not numbers</Text>}
        <TextInput
      label="Employee Name"
      value={modalTitle}
      onChangeText={titleValid}
    />
    {isValidDes? null :<Text style={{fontSize:17,color:"red"}}>Designation max 30 Char Long and not numbers</Text>}
     <TextInput
      label="Designation"
      value={designation}
      onChangeText={designationValid}
    />
     <TextInput
      label="Department"
      value={department}
      onChangeText={text => setDepartment(text)}
    />
          <View style={styles.modalView}>
          <Button title="Update" color="blue" onPress={()=>updateName(modalTitle,ids,designation,department)}/>
          <Button title="Cancel" color="blue" onPress={()=>setModalVisible(!modalVisible)}/>
          </View>
        </View>
      </Modal>

</View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    padding:30
  },
  centeredView:{
    flex:1
  }
});

//make this component available to the app
export default MainScreen;
