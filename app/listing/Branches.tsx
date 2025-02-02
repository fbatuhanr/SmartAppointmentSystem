import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { sampleBranches } from '../data/sample';
import BranchCardWide from '../components/cards/BranchCardWide';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';

const Branches = () => {

    // see all polyclincs 
    return (
        <SafeAreaView>
            <FlatList
                data={sampleBranches}
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