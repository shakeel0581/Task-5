import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignupScreen';

const Stack = createStackNavigator();

const  AuthStack = () => {

  const style = ({ route }) => ({
    headerShown: false
    });

    return (
      <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen 
            name="SignIn" 
            component={LoginScreen}
            options={style}
          />
          <Stack.Screen 
            name="Signup"
            component={SignUpScreen}
            options={style}

          />
      </Stack.Navigator>
    );
  }

export default AuthStack; 