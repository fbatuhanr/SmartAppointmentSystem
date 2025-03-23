import React from 'react';
import { Tabs } from 'expo-router';
import { COLORS } from '@/src/constants/colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                sceneStyle:{
                    backgroundColor: COLORS.white
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
