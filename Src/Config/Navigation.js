import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Headings from '../Screens/MainScreen';
import Home from '../Screens/Home';
import ForgetPassword from '../Screens/ForgetPassword';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SelectOne" component={Headings} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SetPassword" component={ForgetPassword} />



    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;