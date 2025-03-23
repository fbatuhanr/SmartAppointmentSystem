import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useDoctor } from '@/src/hooks/doctor/useDoctor';
import DoctorCardWide from '@/src/components/cards/DoctorCardWide';
import DoctorCardWideSkeleton from '@/src/components/cards/DoctorCardWideSkeleton';
import { skeletonData } from '@/src/data/skeletonData';

const BranchDoctors = () => {

    const { branchId, branchTitle } = useLocalSearchParams();

    const { getDoctorsByBranchId } = useDoctor();
    const { data, loading, error } = getDoctorsByBranchId(branchId as string);

    return (
        <SafeAreaView>
            {
                !error ?
                    <FlatList
                        data={data || skeletonData(3)}
                        renderItem={({ item }) => (data && !loading) ? <DoctorCardWide {...item} /> : <DoctorCardWideSkeleton />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        className='-mx-4 -my-4 px-8 py-8 min-h-screen'
                        ListFooterComponent={<View className='h-32' />}
                    /> :
                    <View className='mt-12'>
                        <Text className='font-nunito-semibold text-lg text-center'>No doctors found for this branch!</Text>
                    </View>
            }

        </SafeAreaView>
    );
};

export default BranchDoctors;