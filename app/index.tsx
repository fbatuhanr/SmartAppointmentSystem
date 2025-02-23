import React from 'react';
import {  Redirect } from 'expo-router';

const Onboard = () => {
  return (
    <Redirect href='/(drawer)/(tabs)'/>
  )
}

export default Onboard