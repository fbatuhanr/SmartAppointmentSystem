import { View, Text, Image, Alert, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { sampleProfessionals } from '@/src/data/sample';
import { StatusBar } from 'expo-status-bar';
import { clipText } from '@/src/utils/textUtils';
import { getNextDays, getTimeSlots } from '@/src/utils/dateUtils';
import { FlatList } from 'react-native-gesture-handler';

const ProfessionalDetail: React.FC = () => {

    const { id } = useLocalSearchParams();
    const { name, branch, description, rating, cover } = sampleProfessionals.find(i => i.id === id) || {};
    const [data, setData] = useState({name, branch, description, rating, cover});

    const days = getNextDays(10);
    const times = getTimeSlots(8, 18);

    const [selection, setSelection] = useState({
        date: '',
        time: ''
    });

    useEffect(() => {
    const request = async () => {

        try {
            const result = await fetch(`https://smartappointmentsystem.onrender.com/api/doctor/${id}`);
            const response = await result.json();
            setData(response);
        }
        catch {

        }
    };

    request();
    }, []);

    const Slot = ({ item, type }: { item: string, type: 'Day' | 'Time' }) => {

        const selectionVal = type === 'Day' ? selection.date : selection.time;
        const isSelected = selectionVal === item;
        return (
            <TouchableOpacity
                onPress={() => setSelection(prev => ({
                    ...prev,
                    [type === 'Day' ? 'date' : 'time']: item
                }))}>
                <View className={`${isSelected ? 'bg-primary' : 'bg-white'} w-24 h-24 mr-2 justify-center items-center rounded-xl shadow shadow-slate-300`}>
                    <Text className={`text-2xl font-nunito-bold ${isSelected && 'text-white'}`}>{item.split(' ')[0]}</Text>
                    <Text className={`text-2xl font-nunito-medium ${isSelected && 'text-white'}`}>{item.split(' ')[1]}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const handleBookAppointment = () => {
        if(!selection.date || !selection.time){
            Alert.alert('Ups...', 'Please make all selections!');
            return;
        }

    }
    return (
        <>
            <StatusBar style='light' />
            <View className='flex-1'>
                <View className='w-[104%] h-80 -ml-[3%]'>
                    <Image source={cover} className='w-full h-full' />
                </View>
                <SafeAreaView className='flex-1 bg-white justify-between'>
                    <View className='-mt-10 bg-white pt-6 px-6 pb-4 rounded-t-[2rem]'>
                        <View className='flex-row justify-between pb-4 border-b border-slate-300'>
                            <View>
                                <Text className='text-3xl font-nunito-bold'>{name}</Text>
                                <Text className='text-xl font-nunito-regular'>{branch}</Text>
                            </View>
                            <View className='flex-row gap-x-1 mt-2 mr-2'>
                                <AntDesign name="star" size={22} color="#F3C32F" />
                                <Text className='font-nunito-semibold text-xl'>{rating}</Text>
                            </View>
                        </View>
                        <View className='flex-row justify-between py-4 border-b border-slate-300'>
                            <View className='gap-y-1'>
                                <Text className='text-2xl font-nunito-bold'>Description</Text>
                                <Text className='text-lg font-nunito-regular min-h-16'>{clipText(description, 175)}</Text>
                            </View>
                        </View>
                        <View className='flex-row justify-between pt-4 border-slate-300'>
                            <View className='gap-y-1'>
                                <Text className='text-2xl font-nunito-bold'>Select Date & Time</Text>
                                <FlatList
                                    data={days}
                                    renderItem={({ item }) => <Slot item={item} type='Day' />}
                                    keyExtractor={(item) => item}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    className='-mx-3 pt-2 px-3 pb-3'
                                />
                                <FlatList
                                    data={times}
                                    renderItem={({ item }) => <Slot item={item} type='Time' />}
                                    keyExtractor={(item) => item}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    className='-mx-3 -mt-1 pt-2 px-3 pb-3'
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleBookAppointment} className='bg-primary w-3/4 h-16 justify-center mx-auto rounded-xl'>
                        <Text className='font-nunito-semibold text-2xl text-white text-center'>Book Appointment</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </>
    )
}

export default ProfessionalDetail