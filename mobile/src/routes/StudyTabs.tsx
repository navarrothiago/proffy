import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';


const { Navigator, Screen } = createBottomTabNavigator();

function StudyTab() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          // Shadown property. In Android we do not have boxshadow.
          elevation: 0,
          // iOS
          shadownOpacity: 0,
          heigth: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name='ios-easel' size={size} color={focused ? '#8257e5' : color}></Ionicons>
            );
          }
        }}
      ></Screen>
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name='ios-heart' size={size} color={focused ? '#8257e5' : color}></Ionicons>
            );
          }
        }}
      ></Screen>
    </Navigator>
  );
}

export default StudyTab;