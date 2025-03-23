import { Drawer } from 'expo-router/drawer';
import { COLORS } from '@/src/constants/colors';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDecodedToken } from '@/src/hooks/useDecodedToken';
import { Link, useRouter } from 'expo-router';
import { useAppDispatch } from '@/src/hooks/useRedux';
import { clearAccessToken } from '@/src/redux/features/authSlice';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { defaultPatientCover, defaultUserCover } from '@/src/data/defaultValues';

function CustomDrawerContent(props: any) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const decodedToken = useDecodedToken();

  const handleLogout = () => {
    console.log("Logging out...");
    dispatch(clearAccessToken());
    props.navigation.closeDrawer();
    router.replace('/(drawer)/(tabs)');
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View className='flex-1 justify-between'>
        <View className='mt-20 gap-y-6'>
          <View className='gap-y-2'>
            <View className='flex-row items-center gap-x-4'>
              <View className='w-12 h-12 rounded-xl overflow-hidden'>
                <Image source={defaultUserCover} className='w-full h-full' />
              </View>
              <View className='mt-1'>
                <Text className='text-xl text-light_1 font-nunito-semibold'>
                  {decodedToken.Name || 'Welcome to SAS'}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View className='bg-purple-200 h-0.5 w-full mb-2' />
            <DrawerItemList {...props} />
            <View className='bg-purple-200 h-0.5 w-full mt-2' />
          </View>
          <View className='mt-6 gap-y-0.5'>
            <Link href='/' className='text-base text-light_2 font-nunito-semibold'>Privacy Policy</Link>
            <Link href='/' className='text-base text-light_2 font-nunito-semibold'>Terms & Conditions</Link>
          </View>
        </View>
        {decodedToken.UserId && (
          <TouchableOpacity
            onPress={handleLogout}
            className='flex-row items-center justify-center gap-x-2'
          >
            <View><AntDesign name="logout" size={24} color={COLORS.light_1} /></View>
            <Text className='text-2xl text-light_1 font-nunito-bold'>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
    </DrawerContentScrollView>
  );
}


export default function DrawerLayout() {

  const decodedToken = useDecodedToken();
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Home',
          drawerLabel: ({ focused }) => (
            <View className='flex-row items-center gap-x-3'>
              <View><AntDesign name="home" size={focused ? 24 : 20} color={COLORS.light_1} /></View>
              <Text className='font-nunito-bold text-light_1' style={{ fontSize: focused ? 22 : 18 }}>
                Browse
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="ControlCenter"
        options={{
          title: 'Control Center',
          drawerItemStyle: !decodedToken.UserId ? { display: 'none' } : undefined,
          drawerLabel: ({ focused }) => (
            <View className='flex-row items-center gap-x-3'>
              <View><AntDesign name="setting" size={focused ? 24 : 20} color={COLORS.light_1} /></View>
              <Text className='font-nunito-bold text-light_1' style={{ fontSize: focused ? 22 : 18 }}>
                Control Center
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="auth-doctor"
        options={{
          headerShown: true,
          drawerItemStyle: decodedToken.UserId ? { display: "none" } : undefined,
          title: 'Doctor Authentication',
          drawerLabel: ({ focused }) => (
            <View className='flex-row items-center gap-x-3'>
              <View><AntDesign name="login" size={focused ? 24 : 20} color={COLORS.light_1} /></View>
              <Text className='font-nunito-bold text-light_1' style={{ fontSize: focused ? 22 : 18 }}>
                Doctor
              </Text>
            </View>
          )
        }}
      />
      <Drawer.Screen
        name="auth-patient"
        options={{
          headerShown: true,
          drawerItemStyle: decodedToken.UserId ? { display: "none" } : undefined,
          title: 'Patient Authentication',
          drawerLabel: ({ focused }) => (
            <View className='flex-row items-center gap-x-3'>
              <View><AntDesign name="login" size={focused ? 24 : 20} color={COLORS.light_1} /></View>
              <Text className='font-nunito-bold text-light_1' style={{ fontSize: focused ? 22 : 18 }}>
                Patient
              </Text>
            </View>
          )
        }}
      />
    </Drawer>
  );
}
