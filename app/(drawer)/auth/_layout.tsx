import React from 'react';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="login"
                options={{
                    title: 'Login',
                    tabBarLabel: ({ focused }) => <Text className={`${focused ? 'text-primary font-bold' : 'font-medium'}`}>Login</Text>,
                    tabBarIcon: ({ focused }) => <AntDesign name="login" size={24} color={focused ? '#7563F7' : 'black'} />
                }}
            />
            <Tabs.Screen
                name="signup"
                options={{
                    title: 'Sign Up',
                    tabBarLabel: ({ focused }) => <Text className={`${focused ? 'text-primary font-bold' : 'font-medium'}`}>Sign Up</Text>,
                    tabBarIcon: ({ focused }) => <AntDesign name="adduser" size={24} color={focused ? '#7563F7' : 'black'} />
                }}
            />
        </Tabs>
    );
}
