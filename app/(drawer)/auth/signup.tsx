import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from "react-hook-form";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';

type FormData = {
  username: string;
  email: string;
  password: string;
};
const Signup = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      username: '', email: '', password: ''
    }
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <SafeAreaView className='px-5'>
      <View className='h-full justify-center'>
        <View className='items-center gap-y-2'>
          <Text className='text-4xl text-dark font-bold'>Create an Account</Text>
          <Text className=''>Please fill this detail to create an account</Text>
        </View>
        <View className='h-14 mt-12 flex-row items-center rounded-xl border border-graey'>
          <AntDesign name="user" size={24} color='#9ca3af' className='ps-4 pe-2' />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pb-1.5'
                placeholder="Enter Username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="username"
          />
        </View>
        {errors.username && <Text>This is required.</Text>}
        <View className='h-14 mt-4 flex-row items-center rounded-xl border border-graey'>
          <AntDesign name="mail" size={24} color='#9ca3af' className='ps-4 pe-2' />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pb-1.5'
                placeholder="Enter Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
        </View>
        {errors.email && <Text>This is required.</Text>}
        <View className='h-14 mt-4 flex-row items-center rounded-xl border border-graey'>
          <AntDesign name="lock" size={24} color='#9ca3af' className='ps-4 pe-2' />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pb-1.5'
                placeholder="Enter Password"
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={true}
                value={value}
              />
            )}
            name="password"
          />
          <Entypo name="eye" size={24} color='#9ca3af' className='ps-2 pe-4' />
          <Entypo name="eye-with-line" size={24} color='#9ca3af' className='ps-2 pe-4' />
        </View>
        {errors.password && <Text>This is required.</Text>}
        <Text className='text-primary text-right mt-4 text-lg'>Forgot Password?</Text>
        <TouchableOpacity className='h-14 bg-primary mt-8 rounded-xl items-center justify-center'
          onPress={handleSubmit(onSubmit)}>
          <Text className='text-xl text-white font-bold'>Sign Up</Text>
        </TouchableOpacity>
        <Link href='/auth/login' className='mt-4 text-primary text-center text-lg font-semibold'>
          Already have an account? Login
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Signup