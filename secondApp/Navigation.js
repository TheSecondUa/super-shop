import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

import CatalogScreen from './screens/CatalogScreen';
import ShortsScreen from './screens/ShortsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdvertScreen from './screens/AdvertScreen';

export default function Navigation() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              style: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#808080'
              },
            }}
          >
            <Tab.Screen name="Каталог" component={CatalogScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('./resource/catalog.png')} 
                style={{ width: 24, height: 24 , shadowColor: 'white'}} 
              />
            ),
          }}/>
          
            <Tab.Screen name="Shorts" component={ShortsScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('./resource/shorts.png')} 
                style={{ width: 24, height: 24 , shadowColor: 'white'}} 
              />
            ),
          }}/>
        <Tab.Screen name="Додати" component={AdvertScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('./resource/add.png')} 
                style={{ width: 24, height: 24 , shadowColor: 'white'}} 
              />
            ),
          }}/>
            <Tab.Screen name="Профіль" component={ProfileScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('./resource/profile.png')} 
                style={{ width: 24, height: 24 , shadowColor: 'white'}} 
              />
            ),
          }}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
}

