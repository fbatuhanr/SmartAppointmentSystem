import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';
import 'react-native-reanimated';
import '../global.css';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details/[id]"
          options={{
            headerTransparent: true,
            header: ({ navigation }) => (
              <LinearGradient colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']} className='flex-1' start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <SafeAreaView>
                  <View className='flex-row px-4 py-1 justify-between items-center'>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <AntDesign name="left" size={26} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Menu Clicked')}>
                      <Ionicons name="ellipsis-vertical" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                </SafeAreaView>
              </LinearGradient>
            )
          }}
        />
        <Stack.Screen name="listing/BranchDoctors"
          options={({ route }) => ({
            header: ({ navigation }) => (
              <SafeAreaView className='bg-white'>
                <View className='flex-row px-4 pt-1 pb-4 justify-between items-center relative'>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={26} color="black" />
                  </TouchableOpacity>
                  <View className='absolute top-1 left-0 right-0 items-center'>
                    <Text className='text-2xl font-nunito-bold'>{route.params?.branchTitle ?? ''} Doctors</Text>
                  </View>
                </View>
              </SafeAreaView>
            )
          })}
        />
        <Stack.Screen name="listing/Branches"
          options={{
            header: ({ navigation }) => (
              <SafeAreaView className='bg-white'>
                <View className='flex-row px-4 pt-1 pb-4 justify-between items-center relative'>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={26} color="black" />
                  </TouchableOpacity>
                  <View className='absolute top-1 left-0 right-0 items-center'>
                    <Text className='text-2xl font-nunito-bold'>All Branches</Text>
                  </View>
                </View>
              </SafeAreaView>
            )
          }}
        />
        <Stack.Screen name="listing/Doctors"
          options={({ route }) => ({
            header: ({ navigation }) => (
              <SafeAreaView className='bg-white'>
                <View className='flex-row px-4 pt-1 pb-4 justify-between items-center relative'>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={26} color="black" />
                  </TouchableOpacity>
                  <View className='absolute top-1 left-0 right-0 items-center'>
                    <Text className='text-2xl font-nunito-bold'>{route.params?.filter ?? ''} Doctors</Text>
                  </View>
                </View>
              </SafeAreaView>
            )
          })}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
