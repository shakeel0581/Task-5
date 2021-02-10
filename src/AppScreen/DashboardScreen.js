import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';
import { Header } from "../components/common";
import { Feed } from "../components";


const Dashboard = ({navigation}) => {

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <Header />

        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
          <Feed 
            storyImg='https://i.pinimg.com/originals/e4/fe/2b/e4fe2b50c1225d3bd28e59c9d946246f.jpg'
            name="Engin Altan"
            profileImg="https://pbs.twimg.com/profile_images/935835347187101696/7xh2MVsO.jpg"
          />
          <Feed 
            storyImg='https://i.pinimg.com/236x/23/9b/29/239b29e698292d393ef85c7d5dce944c.jpg'
            name="Tom Curis"
            profileImg="https://upload.wikimedia.org/wikipedia/commons/a/a5/Tom_cruise_1989.jpg"
          />
          <Feed 
            storyImg='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/kmkrsltibnrzrsubcgvd/will-smith'
            name="Engin Altan"
            profileImg="https://i.pinimg.com/originals/ac/92/0f/ac920f70601382dbd38d2fa44b2c5d02.jpg"
          />
          <Feed 
            storyImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzS0R-DrH4AjLC4XmmslXoqfHxqBf2h8t9zQ&usqp=CAU'
            name="Engin Altan"
            profileImg="https://pbs.twimg.com/profile_images/935835347187101696/7xh2MVsO.jpg"
          />
          <Feed 
            storyImg='https://qph.fs.quoracdn.net/main-qimg-afab7fe7b541952df9624daf9f5202e0'
            name="Engin Altan"
            profileImg="https://pbs.twimg.com/profile_images/935835347187101696/7xh2MVsO.jpg"
          />
        </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});