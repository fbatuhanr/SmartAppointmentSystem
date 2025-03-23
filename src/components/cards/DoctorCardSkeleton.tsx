import { View, Text, Image } from 'react-native'
import React from 'react'
import ShimmerLoader from '../ShimmerLoader'

const DoctorCardSkeleton = () => {
    const defaultCover = require('@/assets/images/doctor-silhouette.jpg');
    return (
        <View className='w-44 h-auto mr-2 rounded-xl relative'>
            <View className='w-full h-40 rounded-xl overflow-hidden'>
                <Image source={defaultCover} className='w-full h-full' />
            </View>
            <View className='h-12 mt-2 p-1'>
                <ShimmerLoader lineCount={2} />
            </View>
        </View>
    )
}

export default DoctorCardSkeleton