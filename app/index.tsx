import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const Onboard = () => {
  return (
    <Redirect href='/(auth)/login'/>
  )
}

export default Onboard