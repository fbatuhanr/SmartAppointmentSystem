import React from 'react';
import { useNavigation } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { defaultDoctorCover } from '@/src/data/defaultValues';

const Profile = () => {
  const navigation = useNavigation();
  const parentNavigation = navigation.getParent() as DrawerNavigationProp<any>;

  return (
    <SafeAreaView className='flex-1 bg-secondary'>
      <View className='px-5'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className='h-1/3 justify-center items-center gap-y-4 mb-2'>
        <View className='w-32 h-32 rounded-xl overflow-hidden'>
          <Image source={defaultDoctorCover} className='w-full h-full' />
        </View>
        <View className='items-center'>
          <Text className='text-2xl font-nunito-bold'>John Smith</Text>
          <Text className='text-xl font-nunito-semibold'>fbatuhanr@gmail.com</Text>
        </View>
      </View>

      <View className='px-5 h-full bg-white py-2 gap-y-3 rounded-tl-3xl rounded-tr-[6rem] shadow-lg shadow-gray-300'>
        <View className='mt-5 ml-2'>
          <Text className='text-2xl text-darkish font-nunito-bold'>Control Center</Text>
        </View>
        <View className='gap-y-1'>
          <TouchableOpacity onPress={() => { }} className='flex-row justify-between items-center p-4'>
            <View className='flex-row items-center gap-x-3'>
              <View className='w-12 h-12 items-center justify-center relative'>
                <View className='bg-secondaryDark absolute top-0 right-0 bottom-0 left-0 rounded-xl' />
                <AntDesign name="calendar" size={24} color="black" />
              </View>
              <Text className='text-xl text-darkish font-nunito-semibold'>My Appointments</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <View className='bg-slate-300 h-0.5' />
          <TouchableOpacity onPress={() => { }} className='flex-row justify-between items-center p-4'>
            <View className='flex-row items-center gap-x-3'>
              <View className='w-12 h-12 items-center justify-center relative'>
                <View className='bg-secondaryDark absolute top-0 right-0 bottom-0 left-0 rounded-xl' />
                <AntDesign name="setting" size={24} color="black" />
              </View>
              <Text className='text-xl text-darkish font-nunito-semibold'>Profile Settings</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile;