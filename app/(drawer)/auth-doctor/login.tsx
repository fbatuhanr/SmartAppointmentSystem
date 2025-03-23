import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, useRouter } from 'expo-router';
import { setAccessToken } from '@/src/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/src/hooks/useRedux';
import useAuthentication from '@/src/hooks/useAuthentication';
import { Toast } from 'toastify-react-native';
import { errorMessages } from '@/src/constants/errorMessages';

type FormData = {
  email: string;
  password: string;
};
const Login = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { loginCall } = useAuthentication();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: '', password: ''
    }
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    //dispatch(setAccessToken("hehe"));
    try {
      const response = await loginCall(data.email, data.password);
      Toast.success(response);
      router.replace('/(drawer)/(tabs)');

    } catch (error) {
      Toast.error(errorMessages.default);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView className='px-5'>
      <View className='h-full justify-center'>
        <View className='items-center gap-y-2'>
          <Text className='text-4xl text-dark font-bold'>Welcome Back!</Text>
          <Text className=''>Use Credentials to acees your account</Text>
        </View>
        <View className='h-14 mt-12 flex-row items-center rounded-xl border border-lightGrey'>
          <AntDesign name="user" size={24} color='#9ca3af' className='ps-4 pe-2' />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pb-1.5'
                placeholder="Enter Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
              />
            )}
          />
        </View>
        {errors.email && <Text>This is required.</Text>}
        <View className='h-14 mt-4 flex-row items-center rounded-xl border border-lightGrey'>
          <AntDesign name="lock" size={24} color='#9ca3af' className='ps-4 pe-2' />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pb-1.5'
                placeholder="Enter Password"
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={true}
                value={value}
                autoCapitalize="none"
              />
            )}
          />
          <Entypo name="eye" size={24} color='#9ca3af' className='ps-2 pe-4' />
          <Entypo name="eye-with-line" size={24} color='#9ca3af' className='ps-2 pe-4' />
        </View>
        {errors.password && <Text>This is required.</Text>}
        <Text className='text-primary text-right mt-4 text-lg'>Forgot Password?</Text>
        <TouchableOpacity className='h-14 bg-primary mt-8 rounded-xl items-center justify-center'
          onPress={handleSubmit(onSubmit)}>
          <Text className='text-xl text-white font-bold'>Log in</Text>
        </TouchableOpacity>
        <Link href='/auth-doctor/signup' className='mt-4 text-primary text-center text-lg font-semibold'>
          No account yet? Sign up
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Login