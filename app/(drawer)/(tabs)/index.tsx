import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/colors';
import { router, useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { DOCTOR_FILTERS } from '@/src/constants/filters';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import BranchesSection from '@/src/components/sections/BranchesSection';
import DoctorsSection from '@/src/components/sections/DoctorsSection';
import { useDecodedToken } from '@/src/hooks/useDecodedToken';
import { defaultPatientCover, defaultUserCover } from '@/src/data/defaultValues';
import { useAppSelector } from '@/src/hooks/useRedux';

const Home = () => {
  const navigation = useNavigation();
  const parentNavigation = navigation.getParent() as DrawerNavigationProp<any>;

  const decodedToken = useDecodedToken();

  useEffect(() => {
    router.push('/(drawer)/profile');
    // parentNavigation.openDrawer();
  }, [])
  return (
    <SafeAreaView>
      <Drawer />
      <ScrollView contentContainerClassName='ml-5 pb-8' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View className='mr-5 flex-row items-center justify-between'>
          <View className='flex-row gap-x-1'>
            <TouchableOpacity onPress={() => parentNavigation.openDrawer()}>
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Text className='text-lg font-nunito-medium'>
              {
                decodedToken.Name ? 
                `Hi, ${decodedToken.Name}` : 
                'Hi, Guest'
              }
            </Text>
          </View>
          <View className='w-12 h-12 rounded-xl overflow-hidden'>
            <Image source={defaultUserCover} className='w-full h-full' />
          </View>
        </View>
        <View className='mr-5'>
          <Text className='text-4xl font-nunito-extrabold leading-normal'>Keep taking {'\n'}care of your health</Text>
        </View>
        <View className='mr-5 mt-6 px-2 py-2 flex-row items-center rounded-xl bg-light_1 shadow-[0_10_10] shadow-slate-300'>
          <AntDesign name="search1" size={24} color={COLORS.lightGrey} className='pr-2' />
          <TextInput placeholder='Search' className='flex-1 text-2xl px-2' />
          <TouchableOpacity className='bg-primary p-2 rounded-xl'
            onPress={() => alert('Search')}>
            <AntDesign name="enter" size={24} color='white' />
          </TouchableOpacity>
        </View>

        <BranchesSection className='mt-8' />

        <DoctorsSection className='mt-10' title='Popular Doctors' filter={DOCTOR_FILTERS.POPULAR} />
        <DoctorsSection className='mt-10' title='Recently Added Doctors' subTitle='Meet our new experts!' filter={DOCTOR_FILTERS.NEW} />

        {
        /* 
          <View className='mt-10 mr-5'>
            <View className='mb-3'>
              <Text className='font-nunito-bold text-2xl'>Explore Doctors</Text>
            </View>
            <View className='gap-y-2'>
              <TouchableOpacity
                onPress={() => router.push({
                  pathname: '/listing/Doctors',
                  params: { filter: FILTERS.TOP_RATED }
                })}
                className='bg-primary px-6 py-2 rounded w-3/5 mx-auto flex-row justify-center gap-x-2'>
                <Text className='text-white text-center font-nunito-bold text-[1.375rem]'>Top Rated</Text>
                <AntDesign name="staro" size={24} color="white" />
              </TouchableOpacity>
              <View className='flex-row justify-between gap-x-1'>
                <TouchableOpacity
                  onPress={() => router.push({
                    pathname: '/listing/Doctors',
                    params: { filter: FILTERS.MOST_BOOKED }
                  })}
                  className='bg-primary flex-1 px-3 py-2 rounded mx-auto flex-row justify-between items-end'>
                  <Text className='text-white text-center font-nunito-bold text-[1.375rem]'>Most Booked</Text>
                  <AntDesign name="calendar" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.push({
                    pathname: '/listing/Doctors',
                    params: { filter: FILTERS.NEW }
                  })}
                  className='bg-primary flex-1 px-3 py-2 rounded mx-auto flex-row justify-between items-end'>
                  <Text className='text-white text-center font-nunito-bold text-[1.375rem]'>Newly Added</Text>
                  <AntDesign name="adduser" size={28} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View> 
        */
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home