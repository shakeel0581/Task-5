import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar, Image, KeyboardAvoidingView, Modal } from 'react-native';
import { CustomInput, DisButton, CustomButton } from "../components/common";

export default function LoginScreen(props) {

  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.loadingContainer}>
      <StatusBar backgroundColor='#F9F9F9' barStyle="dark-content" />
        <KeyboardAvoidingView behavior="padding" style={{paddingHorizontal:30,paddingTop:50}}>
          <Image 
            style={styles.image}
            source={{uri: 'https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png'}}
          />
          <View style={{margin:10}} />
          <CustomInput
          placeholder="Phone number or email "
          term={email}
          onTermChange={(val)=> setEmail(val)}
          />
          <View style={{margin:10}} />
          <CustomButton title='Sign up'
            onPressButton={() => setModal(true)}
          />
        </KeyboardAvoidingView>
        <View style={{width:'100%',marginVertical:10}}>
          <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:10}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'lightgray'}} />
          </View>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={{fontSize:12}}>Already have an account? </Text>
            <Text onPress={() => props.navigation.navigate('SignIn') } style={{fontSize:12,fontWeight:'bold'}}>Log in.</Text>
          </View> 
        </View> 
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={modal}
          onRequestClose={() => setModal(false)}
        >
          <View style={styles.modalBody}>
            <View style={styles.modalContainer}>
              <View style={{marginTop:30}}>
              <Image
                style={styles.modalIng}
                source={{uri: 'https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/confirm-512.png'}}
              />
              <Text style={{fontSize:12,marginVertical:10,fontWeight:'bold',alignSelf:'center'}}>Sgn up successfully . </Text>
              </View>
              <View style={{width:'100%',marginVertical:10}}>
                <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:10}}>
                  <View style={{flex: 1, height: 1, backgroundColor: 'lightgray'}} />
                </View>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text onPress={() => { 
                    props.navigation.navigate('Dashboard');
                    setModal(false);
                    } } style={{fontSize:14,fontWeight:'bold',color:'#187ce6',}}>Done</Text>
                </View> 
              </View> 
            </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // paddingHorizontal:30,
    backgroundColor:'#F9F9F9',
  },
  title: {
    fontSize: 34,
    fontWeight:'bold'
  },
  image:{
    width:220,
    height:200,
    alignSelf:'center'
  },
  modalBody:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    borderRadius:5,
    padding:10
  },
  modalContainer:{
    height:280,
    width:250,
    backgroundColor:'#fff',
    borderRadius:15,
    justifyContent:'space-between',
    alignItems:'center',
  },
  modalIng:{
    width:150,
    height:150,
    alignSelf:'center'
  }
});