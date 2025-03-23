import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { useBranch } from '@/src/hooks/branch/useBranch';
import BranchCard from '../cards/BranchCard';
import BranchCardSkeleton from '../cards/BranchCardSkeleton';
import { skeletonData } from '@/src/data/skeletonData';


const BranchesSection = ({ className = '' }) => {

    const { getAllBranches } = useBranch();
    const { data, loading, error } = getAllBranches();

    return (
        <View className={className}>
            <View className='mr-5 flex-row justify-between items-center'>
                <Text className='font-nunito-bold text-2xl'>Polyclinics</Text>
                <Link href='/listing/Branches' className='text-primary font-nunito-bold text-lg'>See All</Link>
            </View>
            <FlatList
                data={data || skeletonData()}
                renderItem={({ item }) => (data && !loading) ? <BranchCard {...item} /> : <BranchCardSkeleton />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                className='-mx-4 px-4 py-6'
            />
        </View>
    )
}

export default BranchesSection;