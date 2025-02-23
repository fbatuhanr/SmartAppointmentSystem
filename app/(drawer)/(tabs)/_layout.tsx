import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/src/constants/Colors';

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
                    title: 'Browse'
                }}
            />
            <Tabs.Screen
                name="appointments"
                options={{
                    title: 'Appointments'
                }}
            />
        </Tabs>
    );
}
