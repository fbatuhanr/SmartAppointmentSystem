import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack, useLocalSearchParams } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { sampleProfessionals } from '../data/sample';
import ProfessionalCardWide from '../components/cards/DoctorCardWide';
import FILTERS from '../constants/filters';

const Doctors = () => {

    const { filter } = useLocalSearchParams(); // FILTERS

    return (
        <SafeAreaView>
            <View className='p-5'>
                <FlatList
                    data={sampleProfessionals}
                    renderItem={({ item }) => <ProfessionalCardWide {...item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    className='-mx-3 px-3 pb-3'
                />
            </View>
        </SafeAreaView>
    )
}

export default Doctors