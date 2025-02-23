import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { sampleBranches } from '@/src/data/sample';
import BranchCardWide from '@/src/components/cards/BranchCardWide';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useBranch } from '@/src/hooks/branch/useBranch';

const Branches = () => {

    const { getAllBranches } = useBranch();
    const { data, loading, error } = getAllBranches();

    console.log('Branches loading:', loading);
    console.log('Branches error:', error);
    console.log('Branches data:', data);
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error!</Text>;
    if (data) return (
            <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <BranchCardWide {...item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    className='-mx-4 -my-4 px-8 py-8'
                    ListFooterComponent={<View className='h-32' />}
                />
            </SafeAreaView>
        )
}

export default Branches;