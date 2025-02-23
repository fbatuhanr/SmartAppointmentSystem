import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import ShimmerLoader from '../ShimmerLoader';
import { useBranch } from '@/src/hooks/branch/useBranch';
import BranchCard from '../cards/BranchCard';

type BranchesSectionProps = {
    className?: string;
}
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
                data={data || [{id:1}, {id:2}, {id:3}]}
                renderItem={!loading ? ({ item }) => <BranchCard {...item} /> : () => <View className='bg-white w-36 h-28 mr-2 py-4 px-2 rounded-xl shadow-md shadow-slate-300 items-center gap-y-1 relative'><ShimmerLoader /></View>}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                className='-mx-4 px-4 py-6'
            />
        </View>
    )
}

export default BranchesSection;