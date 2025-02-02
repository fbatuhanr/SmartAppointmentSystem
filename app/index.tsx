import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const Onboard = () => {
  return (
    <Redirect href='/(tabs)'/>
  )
}

export default Onboard