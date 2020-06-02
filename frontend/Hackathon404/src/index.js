import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import ServiceDetails from './ServiceDetails';

const Stack = createStackNavigator();

export default function AppRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashborad" component={Dashboard} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}