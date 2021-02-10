import React,{useContext} from 'react';
import { Text, StyleSheet, View, Image,TextInput, TouchableOpacity } from 'react-native';

const CustomInput = ({keyboardType,placeholder,term,onTermChange,secureTextEntry,Error,hideShowPassword,pressIcon,LeftIcon}) => {
    
    return(
        <>
        <View style={styles.input}> 
            <TextInput 
                style={{width:'90%'}}
                placeholder={placeholder}
                autoCorrect={false}
                value={term}
                keyboardType={keyboardType}
                onChangeText={onTermChange}
                secureTextEntry={hideShowPassword}
                error={Error}
            />
            {secureTextEntry?
            <TouchableOpacity style={{width:'10%'}} onPress={pressIcon} >
            <Image 
            style={styles.inputIcon}
            source={{uri: hideShowPassword?'https://static.thenounproject.com/png/506282-200.png':'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-512.png'}}/>
            </TouchableOpacity>
            : 
            <View style={styles.inputIcon}/>}
        </View>
        
        </>
    );
}
const styles = StyleSheet.create({
   
    input:{
        fontSize:14,
        height:50,
        width:'100%',
        backgroundColor:'#F5F5F5',
        borderColor:'lightgray',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems: 'center'
    },
    inputIcon:{
      width:30,
      height:30,
      alignItems: 'center',
      
    },
});

export { CustomInput };
