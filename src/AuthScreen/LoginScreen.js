import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar, Image, KeyboardAvoidingView,Modal } from 'react-native';
import { CustomInput, DisButton, CustomButton } from "../components/common";

export default function LoginScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide ] = React.useState(true);
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.loadingContainer}>
      <StatusBar backgroundColor='#F9F9F9' barStyle="dark-content" />
        <KeyboardAvoidingView behavior="padding" style={{paddingHorizontal:30,paddingTop:50}}>
          <Image 
            style={styles.image}
            source={require('../../assets/images/insta_text_logo.png')}
          />
          <View style={{margin:10}} />

          <CustomInput
          placeholder="Phone number, email or username"
          term={email}
          onTermChange={(val)=> setEmail(val)}
          />

          <View style={{margin:10}} />

          <CustomInput
            term={password}
            hideShowPassword={hide}
            placeholder="Password"
            secureTextEntry={true}
            onTermChange={(val)=> setPassword(val)}
            pressIcon={(val)=> setHide(!hide)}
          />

          <View style={{margin:10}} />

          <CustomButton title='Log In'
            onPressButton={() => setModal(true)}
          />

          <View style={{margin:10}} />
          <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text onPress={() => props.navigation.navigate('Signup') } style={{fontSize:12}}>Forgot your details?</Text>
            <Text onPress={() => props.navigation.navigate('Signup') } style={{fontSize:12,fontWeight:'bold'}}> Get help logging in.</Text>
          </View>  
        <View style={{margin:10}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'lightgray'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
        </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'lightgray'}} />
        </View>
        <View style={{margin:10}} />
        <CustomButton title='Log In as @shakeel128'
            onPressButton={() => setModal(true)}
          />
      </KeyboardAvoidingView>

      <View style={{width:'100%',marginVertical:10}}>
        <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'lightgray'}} />
        </View>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <Text style={{fontSize:12}}>Donthave account? </Text>
          <Text onPress={() => props.navigation.navigate('Signup') } style={{fontSize:12,fontWeight:'bold'}}>Sign up.</Text>
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
              <Text style={{fontSize:12,marginVertical:10,fontWeight:'bold',alignSelf:'center'}}>Sign up successfully . </Text>
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
    width:150,
    height:60,
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