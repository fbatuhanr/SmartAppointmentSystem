import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppointmentsTabLayout = () => {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  )
}

export default AppointmentsTabLayout