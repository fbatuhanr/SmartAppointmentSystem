import { View, Text } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Link } from 'expo-router'
import Colors from '@/src/constants/colors';

export interface BranchCardProps {
    id: string;
    title: string;
}
const BranchCardWide: React.FC<BranchCardProps> = ({ id, title }) => {
    return (
        <View className='bg-white flex-1 h-28 m-2 rounded-xl shadow-lg shadow-slate-300 justify-center items-center gap-y-3 relative'>
            <Fontisto name="doctor" size={26} color={Colors.primaryDark} />
            <Text className='font-nunito-semibold text-xl text-center leading-tight'>{title}</Text>
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

export default BranchCardWide;