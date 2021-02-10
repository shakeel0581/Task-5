import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "./AppScreen/SplashScreen";
import AuthScreens from "./AuthScreen";
import Dashboard from "./AppScreen/DashboardScreen";

const Stack = createStackNavigator();

export default function App() {
  const [splash, setSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
        setSplash(false);
    }, 5000);
  }, []);

  if(splash){
      return(
          <SplashScreen />
      );
  }

  const style = ({ route }) => ({
    headerShown: false
    });

    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={style} name="AuthStack" component={AuthScreens} />
                <Stack.Screen options={style} name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};