import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { sampleProfessionals } from '../data/sample';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import ProfessionalCardWide from '../components/cards/DoctorCardWide';
import { Stack, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
const BranchDoctors = () => {

    const { branchId, branchTitle } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <View className='p-5'>
                <FlatList
                    data={sampleProfessionals.filter(i => i.branch === branchTitle)}
                    renderItem={({ item }) => <ProfessionalCardWide {...item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    className='-mx-3 px-3 pb-3'
                />
            </View>
        </SafeAreaView>
    )
}

export default BranchDoctors;