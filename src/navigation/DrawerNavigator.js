import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import History from '../screens/History';
import Geography from '../screens/Geography';
import Tourism from '../screens/Tourism';
import About from '../screens/About';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

// Custom Drawer Content
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Add the Image at the top */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/cover.jpg')} // Replace with your image path
          style={styles.logo}
        />
      </View>
      {/* Render the default drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#00796B' },
        headerTintColor: '#fff',
        drawerStyle: { backgroundColor: '#fff' },
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Geography" component={Geography} />
      <Drawer.Screen name="Tourism" component={Tourism} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20, // Space around the image
  },
  logo: {
    width: '95%', // Adjust the size of the logo
    height: 100,
    resizeMode: 'cover33',
    margin:0,
    padding:0
  },
});

export default DrawerNavigator;
