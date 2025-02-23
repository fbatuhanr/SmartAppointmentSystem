import { Drawer } from 'expo-router/drawer';
import Colors from '@/src/constants/Colors';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: Colors.primary,
      drawerActiveTintColor: Colors.white,
    }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Home',          
          drawerLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.light_1 : Colors.darkish }} className='font-nunito-bold text-xl'>
              Browse
            </Text>
          ),
        }}
      />
      <Drawer.Screen
        name="auth"
        options={{
          headerShown: true,
          title: 'Authentication',
          drawerLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.light_1 : Colors.darkish }} className='font-nunito-bold text-xl'>
              Login or Sign Up
            </Text>
          ),
          drawerIcon: ({ focused }) => <AntDesign name="login" size={24} color={focused ? Colors.light_1 : Colors.darkish} />
        }}
      />
    </Drawer>
  );
}
