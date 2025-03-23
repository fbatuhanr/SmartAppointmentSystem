import React from 'react';
import { Redirect } from 'expo-router';

const Appointments = () => {
  
  const isDoctor = true;

  if(isDoctor)
    return <Redirect href="/(drawer)/(tabs)/appointments/DoctorAppointments" />;

  return <Redirect href="/(drawer)/(tabs)/appointments/PatientAppointments" />;
}

export default Appointments