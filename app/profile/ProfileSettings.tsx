import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TextInput } from 'react-native';

type FormData = {
  fullName: string;
  email: string;
  password: string;
};
const ProfileSettings = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      fullName: '', email: '', password: ''
    }
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <View className='flex-1 bg-secondary border-t border-lightGrey'>
      <View className='p-6 gap-y-2'>
        <View className='h-14 flex-row items-center rounded-xl border border-lightGrey'>
          <AntDesign name="user" size={24} color='#9ca3af' className='ps-4 pe-2' />
          <Controller
            name="fullName"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pb-1.5'
                placeholder="Enter Full Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
        {errors.fullName && <Text>This is required.</Text>}
        <View className='h-14 flex-row items-center rounded-xl border border-lightGrey'>
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
              />
            )}
          />
        </View>
        {errors.email && <Text>This is required.</Text>}
      </View>
    </View>
  )
}

export default ProfileSettings;