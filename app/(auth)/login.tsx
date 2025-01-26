import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useForm, Controller } from "react-hook-form";


const Title = styled.Text`
  font-size: 35px;
  text-align: center;
  color: palevioletred;
`;

const LoginInput = styled.TextInput`

`;

const Login = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })
  const onSubmit = (data) => console.log(data)
  
  return (
    <SafeAreaView className='px-5'>
      <Title>Welcome Back!</Title>
      <View className='h-14 flex-row items-center rounded-xl border border-gray-400'>
        <AntDesign name="user" size={24} color='#9ca3af' className='ps-4 pe-2' />
        <TextInput className='flex-1 h-full' 
        
        placeholder='Enter Username' />
      </View>
    </SafeAreaView>
  )
}

export default Login