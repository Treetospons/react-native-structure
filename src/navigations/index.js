import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// header
import headerBar from '../constants/headerBar';

// screen
import HomeScreen from '../pages/home';
import GraphScreen from '../pages/graph/Graph';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerBar.HeaderScreen}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={headerBar.HeaderCenter("หน้าหลัก")}/>
        <Stack.Screen name="GraphScreen" component={GraphScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
