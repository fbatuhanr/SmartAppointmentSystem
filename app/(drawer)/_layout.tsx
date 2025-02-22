
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />    
      <Drawer.Screen
        name="auth"
        options={{
          headerShown: true,
          drawerLabel: 'Login or Sign Up',
          title: 'Authentication',
        }}
      />
    </Drawer>
  );
}
