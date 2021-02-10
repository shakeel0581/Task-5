import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';


const SplashScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#f9f9f9" barStyle='dark-content' />
      <Image
        source={require('../../assets/images/demoLogo.png')}
        style={{width: '90%', resizeMode: 'contain',height:150,marginBottom:100}}
      />
      <View style={styles.activityIndicator}>
        <Text style={styles.title}>from</Text>
        <Text style={styles.title2}>FACEBOOK</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    bottom: 80,
    position:'absolute'
  },
  title:{
    fontSize:16,
    color:'gray'
  },
  title2:{
    letterSpacing: 3,
    fontSize:18,
    color:'#f46f30'
  }
});