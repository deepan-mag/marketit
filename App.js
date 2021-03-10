import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Switch } from 'react-native'
import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import Screen from './app/components/Screen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import MessagesScreen from './app/screens/MessagesScreen'

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <AppPicker icon='apps' placeholder='Category' />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
