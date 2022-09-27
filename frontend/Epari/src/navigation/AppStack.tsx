import React from 'react';
import {Home, AiCapture, AiResult, HerbBook, HerbDetail} from '../screens';
import AiRegister from '../screens/AiRegister';
import AiSpareResult from '../screens/AiSpareResult';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../types';

const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createNativeStackNavigator<AppStackParamList>();

const Tab: React.FC = () => {
  return (
    <Navigator initialRouteName="HerbBook" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      {/* <Screen name="AiCapture" component={AiCapture} />
      <Screen name="AiResult" component={AiResult} /> */}
      <Screen name="HerbBook" component={HerbBook} />
    </Navigator>
  );
};

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="AiCapture" component={AiCapture} />
      <Stack.Screen name="AiResult" component={AiResult} />
      <Stack.Screen name="AiRegister" component={AiRegister} />
      <Stack.Screen name="AiSpareResult" component={AiSpareResult} />
      <Stack.Screen name="Detail" component={HerbDetail} />
    </Stack.Navigator>
  );
};
export default AppStack;
