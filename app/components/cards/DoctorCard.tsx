import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router';

export interface DoctorCardProps {
    id: string;
    name: string;
    type: string;
    branch: string;
    rating: number;
    description: string;
    cover: ImageSourcePropType;
    timeSlots?: any
}
const DoctorCard: React.FC<DoctorCardProps> = ({
    id, name, branch, rating, cover
}) => {
    return (
        <View className='w-44 h-auto mr-2 rounded-xl relative'>
            <View className='w-full h-40 rounded-xl overflow-hidden'>
                <Image source={cover} className='w-full h-full' />
            </View>
            <View className='flex-row gap-x-2 mt-2.5 mb-0.5 ps-1'>
                <AntDesign name="star" size={22} color="#F3C32F" />
                <Text className='font-nunito-medium text-xl'>{rating}</Text>
            </View>
            <View className='ps-2'>
                <Text className='font-nunito-bold text-xl'>{name}</Text>
                <Text className='font-nunito-regular text-md'>{branch}</Text>
            </View>

            <Link href={{pathname: '/details/[id]', params: { id } }} className='absolute top-0 right-0 bottom-0 left-0'></Link>
        </View>
    )
}

export default DoctorCard;
