import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router';

export interface DoctorCardWideProps {
    id: string;
    name: string;
    type: string;
    branch: string;
    rating: number;
    description: string;
    cover: ImageSourcePropType;
    timeSlots?: any
}
const DoctorCardWide: React.FC<DoctorCardWideProps> = ({
    id, name, branch, rating, cover
}) => {
    return (
        <View className='flex-row w-full h-32 p-2 mb-2 gap-x-4 rounded-xl bg-white shadow-lg shadow-slate-300 relative'>
            <View className='w-32 h-full rounded-xl overflow-hidden'>
                <Image source={cover} className='w-full h-full' />
            </View>
            <View className='flex-1 mt-2'>
                <Text className='font-nunito-bold text-2xl'>{name}</Text>
                <Text className='font-nunito-regular text-xl'>{branch}</Text>
            </View>
            <View className='flex-row gap-x-1 mt-2 mr-2'>
                <AntDesign name="star" size={22} color="#F3C32F" />
                <Text className='font-nunito-medium text-xl'>{rating}</Text>
            </View>

            <Link href={{ pathname: '/details/[id]', params: { id } }} className='absolute top-0 right-0 bottom-0 left-0'></Link>
        </View>
    )
}

export default DoctorCardWide;