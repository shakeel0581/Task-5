import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';


const Header = () => {

  return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('../../../assets/images/insta_text_logo.png')}
        />
        <Image 
          style={styles.icon}
          source={{uri:'https://pngimage.net/wp-content/uploads/2019/05/facebook-icon-png-download-2.png'}}
        />
      </View>
  );
};


const styles = StyleSheet.create({
  
  container: {
    flexDirection:'row',
    padding:20,
    backgroundColor: "#fff",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    width:'100%',
    shadowOpacity:2,
    elevation:10,
    position:'relative',
  },
    logo: {
      width: 100,
      height:40,
      marginTop:5
    },
    icon: {
      width: 25,
      height:25,
      marginTop:5
    },
});

export { Header };
