import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router';
import ShimmerLoader from '../ShimmerLoader';

const DoctorCardWideSkeleton: React.FC = () => {
    const defaultCover = require('@/assets/images/doctor-silhouette.jpg');
    return (
        <View className='flex-row w-full h-32 p-2 mb-2 gap-x-4 rounded-xl bg-white shadow-lg shadow-slate-300 relative'>
            <View className='w-32 h-full rounded-xl overflow-hidden'>
                <Image source={defaultCover} className='w-full h-full' />
            </View>
            <View className='flex-1 p-4'>
                <ShimmerLoader />
            </View>
        </View>
    )
}

export default DoctorCardWideSkeleton;