import React,{useContext} from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const  CustomButton = ({title, onPressButton, icon}) => {
    
    return(
        <> 
            <TouchableOpacity style={styles.button} onPress={onPressButton}>
                <View style={styles.va}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        height:50,
        alignSelf:'stretch',
        borderRadius:2,
        borderRadius:5,
        backgroundColor:'#187ce6',
        width:'100%'
    },
    text: {
        fontSize:16,
        color:'#fff',
      },
      va: {
          flex:1,
          alignItems: 'center',
      justifyContent: 'center',
        },
});
export { CustomButton }  ;
