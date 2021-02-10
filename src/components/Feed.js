import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { Avatar } from "react-native-paper";


const Feed = ({storyImg,name,profileImg}) => {

  return (
      <View style={styles.container}>
          <View style={styles.containerTop}>
            <View style={{flexDirection:'row'}}>
                <Avatar.Image
                source={{uri: profileImg}}
                size={50}
                />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Image 
                style={styles.icon}
                source={{uri:'https://image.flaticon.com/icons/png/512/61/61140.png'}}
            />
        </View>
        <Image 
            style={styles.storyImg}
            source={{uri:storyImg}}
            />
        <View style={styles.bottomContainer}>
            <View style={styles.containerIcon}>
                <View style={styles.containerIconInner}>
                    <Image 
                    style={styles.Bottomicon}
                    source={{uri:'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-04-512.png'}}
                    />
                    <Image 
                    style={styles.Bottomicon}
                    source={{uri:'https://img.pngio.com/chat-comment-instagram-media-social-social-media-icon-instagram-comment-png-512_512.png'}}
                    />
                    <Image 
                    style={styles.Bottomicon}
                    source={{uri:'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_send-512.png'}}
                    />
                </View>
                <Image 
                style={styles.Bottomicon}
                source={{uri:'https://cdn.shopify.com/s/files/1/1536/9595/t/17/assets/wishlist-icon.png?v=8004707337716485181'}}
                />
            </View>
            <Text><Text style={styles.bottomText}>1,343 likes</Text></Text>
            <Text><Text style={styles.bottomText}>Zastudios</Text> Amal <Text style={{color:'gray'}}>... more</Text></Text>
            <Text style={{fontSize:13,color:'gray',marginVertical:5}}>View all 16 comments</Text>
            <Text style={{fontSize:10,color:'gray',marginBottom:15}}>9 hours ago</Text>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#fff",
    // alignItems: 'center',
    width:'100%',
    flex:1,
  },
  containerTop: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    width:'100%',
    padding:10,
  },
    logo: {
      width: 100,
      height:40,
      marginTop:5
    },
    icon: {
      width: 15,
      height:17,
      marginTop:5
    },
    storyImg:{
        width: '100%',
        height:400,
        flex:1,
        alignSelf:'stretch'
    },
    name:{
        alignSelf:'center',
        fontSize: 16,
        fontWeight:'bold',
        paddingLeft:10
    },
    Bottomicon:{
        width: 30,
        height:30,
        marginRight:5,
        marginVertical:10
    },
    containerIcon:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'100%',
    },
    containerIconInner:{
        flexDirection:'row'
    },
    bottomText:{
        fontSize: 14,
        fontWeight:'bold',
        paddingLeft:10
    },
    bottomContainer:{
        paddingHorizontal:10
    }
});

export { Feed };
