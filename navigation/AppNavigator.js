import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ShopScreen from '../screens/Shop/ShopScreen'
import NewsScreen from '../screens/News/NewsScreen'
import GamesScreen from '../screens/Games/GamesScreen'
import RankScreen from '../screens/Rank/RankScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Shop" 
          component={ShopScreen}  
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
          name="News" 
          component={NewsScreen} 
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
          name="Games" 
          component={GamesScreen} 
          options={{
            tabBarLabel: 'Games',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gamepad" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
          name="Rank" 
          component={RankScreen} 
          options={{
            tabBarLabel: 'Rank',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chess-king" color={color} size={size} />
          ),
        }}
          />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator