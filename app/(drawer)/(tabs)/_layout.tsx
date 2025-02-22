import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                sceneStyle:{
                    backgroundColor: Colors.white
                }
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home'
                }}
            />
            <Tabs.Screen
                name="booking"
                options={{
                    title: 'Booking'
                }}
            />
        </Tabs>
    );
}
