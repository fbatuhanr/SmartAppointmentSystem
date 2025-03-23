import React, { useMemo } from 'react';
import { View, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { skeletonData } from '@/src/data/skeletonData';
import DoctorCardWide from '@/src/components/cards/DoctorCardWide';
import DoctorCardWideSkeleton from '@/src/components/cards/DoctorCardWideSkeleton';
import { DOCTOR_FILTERS } from '@/src/constants/filters';
import { useDoctor } from '@/src/hooks/doctor/useDoctor';

const Doctors = () => {

  const { filter } = useLocalSearchParams();

  const { getAllDoctors, getPopularDoctors, getNewDoctors } = useDoctor();

  const getFilteredDoctors = useMemo(() => {
    switch (filter) {
      case DOCTOR_FILTERS.POPULAR:
        return getPopularDoctors;
      case DOCTOR_FILTERS.NEW:
        return getNewDoctors;
      default:
        return getAllDoctors;
    }
  }, [filter]);

  const { data, loading, error } = getFilteredDoctors();

  return (
    <SafeAreaView>
      <FlatList
        data={data || skeletonData(3)}
        renderItem={({ item }) => (data && !loading) ? <DoctorCardWide {...item} /> : <DoctorCardWideSkeleton />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        className='-mx-4 -my-4 px-8 py-8 min-h-screen'
        ListFooterComponent={<View className='h-32' />}
      />
    </SafeAreaView>
  );
};

export default Doctors;