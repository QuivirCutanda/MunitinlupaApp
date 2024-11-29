import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

import x from './assets/images/logo.png'
import { StatusBar } from 'react-native';
const App = () => {
  return (
   <>
    <StatusBar />
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
   </>
  );
};

export default App;
