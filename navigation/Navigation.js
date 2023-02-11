import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screens from './screenLinking'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name={screens.plakaSorgu.name}
          component={screens.plakaSorgu.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
