import React from 'react';
import Home from "./screens/Home";
import RestorantDetail from "./screens/RestorantDetail";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import store from './Redux/Store'

store.subscribe(()=>console.log(store.getState()))
const Navigation = () => {
  
  const Stack = createStackNavigator();
  
  const screenOptions={
    headerShown:false,
  };

  return (
      <Provider store={store}>
    <NavigationContainer>
     <Stack.Navigator screenOptions={screenOptions} initialRouteName='homie'>
      <Stack.Screen name='homie' component={Home}/>  
      <Stack.Screen name='resdetail' component={RestorantDetail} />
     </Stack.Navigator> 
    </NavigationContainer>
      </Provider>
  )
}

export default Navigation