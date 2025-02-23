import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type ShimmerLoaderProps = {
  lineCount?: number;
}

const { width } = Dimensions.get('window');

const ShimmerLine = () => {
  const translateX = useSharedValue(-width);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(width, { duration: 1500 }),
      -1,
      false
    );
  }, [translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className='w-full h-4 bg-[#E1E9EE] rounded-lg overflow-hidden'>
      <View className='bg-[#E1E9EE]' />
      <Animated.View style={[styles.shimmer, animatedStyle]} />
    </View>
  );
};

const ShimmerLoader: React.FC<ShimmerLoaderProps> = ({ lineCount = 3 }) => (
  <View className='w-full h-full p-1 justify-between items-center'>
    {Array.from({ length: lineCount }).map((_, index) => (
      <ShimmerLine key={index} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  shimmer: {
    width: '30%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    opacity: 0.8,
  },
});

export default ShimmerLoader;
