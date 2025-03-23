import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { sampleBranches } from '@/src/data/sample';
import BranchCardWide from '@/src/components/cards/BranchCardWide';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useBranch } from '@/src/hooks/branch/useBranch';
import { skeletonData } from '@/src/data/skeletonData';
import BranchCardWideSkeleton from '@/src/components/cards/BranchCardWideSkeleton';

const Branches = () => {

    const { getAllBranches } = useBranch();
    const { data, loading, error } = getAllBranches();
    
    return (
        <SafeAreaView>
            <FlatList
                data={data || skeletonData(12)}
                renderItem={({ item }) => (data && !loading) ? <BranchCardWide {...item} /> : <BranchCardWideSkeleton />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                className='-mx-4 -my-4 px-8 py-8 min-h-screen'
                ListFooterComponent={<View className='h-32' />}
            />
        </SafeAreaView>
    );
};

export default Branches;