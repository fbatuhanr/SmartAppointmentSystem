import { View, Text } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Link } from 'expo-router'
import Colors from '@/src/constants/Colors';

export interface BranchCardProps {
    id: string;
    title: string;
}
const BranchCard: React.FC<BranchCardProps> = ({ id, title }) => {
    return (
        <View className='bg-white w-36 h-28 mr-2 py-4 px-2 rounded-xl shadow-md shadow-slate-300 items-center gap-y-1 relative'>
            <Fontisto name="doctor" size={26} color={Colors.primaryDark} />
            <View className='flex-1 w-full justify-center'>
                <Text className='font-nunito-semibold text-lg text-center leading-tight'>{title}</Text>
            </View>
            <Link href={{
                pathname: '/listing/BranchDoctors',
                params: { 
                    branchId: id,
                    branchTitle: title
                }
            }} className='absolute top-0 right-0 bottom-0 left-0' />
        </View>
    )
}

export default BranchCard