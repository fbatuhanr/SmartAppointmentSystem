import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { DOCTOR_FILTERS } from '@/src/constants/filters';
import { useDoctor } from '@/src/hooks/doctor/useDoctor';
import { skeletonData } from '@/src/data/skeletonData';
import DoctorCard from '@/src/components/cards/DoctorCard'
import DoctorCardSkeleton from '../cards/DoctorCardSkeleton';

type DoctorsSectionProps = {
    className?: string;
    filter: string;
    title: string;
    subTitle?: string;
}
const DoctorsSection: FC<DoctorsSectionProps> = ({ className, filter, title, subTitle }) => {

    const { getAllDoctors } = useDoctor();
    const { data, loading, error } = getAllDoctors();

    return (
        <View className={className}>
            <View className='mr-5 flex-row justify-between items-center'>
                <Text className='font-nunito-bold text-2xl'>{title}</Text>
                <Link href={{
                    pathname: '/listing/Doctors',
                    params: { filter }
                }}
                    className='text-primary font-nunito-bold text-lg'>
                    See All
                </Link>
            </View>
            {
                subTitle &&
                <View>
                    <Text className='font-nunito-regular-italic text-slate-800 text-lg'>{subTitle}</Text>
                </View>
            }
            <View className='mt-3 flex-row gap-x-2'>
                <FlatList
                    data={data || skeletonData()}
                    renderItem={({ item }) => (data && !loading) ? <DoctorCard {...item} /> : <DoctorCardSkeleton />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default DoctorsSection