import COLORS from '@/src/constants/colors';
import { useBranch } from '@/src/hooks/branch/useBranch';
import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const data = [
  { label: 'Sunday', value: 0 },
  { label: 'Monday', value: 1 },
  { label: 'Tuesday', value: 2 },
  { label: 'Wednesday', value: 3 },
  { label: 'Thursday', value: 4 },
  { label: 'Friday', value: 5 },
  { label: 'Saturday', value: 6 },
];

type FormData = {
  fullName: string;
  branchId: number | null;
  description: string;
};

const prepareDropdownBranchData = (data: any) => {
  if (!data) return null;

  return data.map((i: { title: string; id: number; }) => ({
    label: i.title,
    value: i.id
  }));
}

const ProfileSettings = () => {

  const { getAllBranches } = useBranch();
  const { data: branchData, loading, error } = getAllBranches();
  const [dropdownBranchData, setDropdownBranchData] = useState<any>(null);

  useEffect(() => {
    setDropdownBranchData(prepareDropdownBranchData(branchData));
  }, [branchData]);

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      fullName: '', branchId: null, description: ''
    }
  });

  const onSubmit = (data: FormData) => console.log(data);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  console.log(value);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [selected, setSelected] = useState([]);

  const renderItem = item => {
    console.log(item);
    return (
      <View style={ddMultiStyles.item}>
        <Text style={ddMultiStyles.selectedTextStyle}>{item.label}</Text>
        <AntDesign name="plus" size={22} color="black" />
      </View>
    );
  };
  return (
    <View className='flex-1 bg-secondary border-t border-lightGrey'>
      <View className='p-6 gap-y-2'>
        <View className='h-14 flex-row items-center rounded-xl border border-lightGrey'>
          <AntDesign name="user" size={24} color='#9ca3af' className='ps-4 pe-2' />
          <Controller
            name="fullName"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pb-1.5'
                placeholder="Enter Full Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
        {
          dropdownBranchData &&
          <Dropdown
            style={[ddStyles.dropdown, isFocus && { borderColor: 'blue' }]}
            containerStyle={ddStyles.container}
            placeholderStyle={ddStyles.placeholderStyle}
            selectedTextStyle={ddStyles.selectedTextStyle}
            inputSearchStyle={ddStyles.inputSearchStyle}
            iconStyle={ddStyles.iconStyle}
            itemContainerStyle={ddStyles.itemContainerStyle}
            data={dropdownBranchData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Branch"
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Fontisto name="doctor" size={24} color='#9ca3af' className='mr-2' />
            )}
          />
        }

        {errors.fullName && <Text>This is required.</Text>}
        <View className='h-24 py-2 pr-2 flex-row rounded-xl border border-lightGrey'>
          <Entypo name="text" size={24} color='#9ca3af' className='ps-4 pe-2 pt-2' />
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='flex-1 h-full text-xl pr-2'
                placeholder="Enter Description Text"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
            )}
          />
        </View>
        {errors.description && <Text>This is required.</Text>}

        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}

        <MultiSelect
          style={ddMultiStyles.dropdown}
          containerStyle={ddMultiStyles.container}
          placeholderStyle={ddMultiStyles.placeholderStyle}
          selectedTextStyle={ddMultiStyles.selectedTextStyle}
          inputSearchStyle={ddMultiStyles.inputSearchStyle}
          iconStyle={ddMultiStyles.iconStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select Available Days"
          value={selected}
          onChange={item => {
            setSelected(item);
          }}
          renderLeftIcon={() => (
            <AntDesign name="calendar" size={24} color='#9ca3af' className='pe-2' />
          )}
          renderItem={renderItem}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={ddMultiStyles.selectedStyle}>
                <Text style={ddMultiStyles.textSelectedStyle}>{item.label}</Text>
                <AntDesign color="black" name="delete" size={17} />
              </View>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity className='h-14 bg-primary mt-8 rounded-xl items-center justify-center'
          onPress={handleSubmit(onSubmit)}>
          <Text className='text-xl text-white font-bold'>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileSettings;

const ddStyles = StyleSheet.create({
  dropdown: {
    height: 52,
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: 'white',
    padding: 8,
    marginTop: 6,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  placeholderStyle: {
    fontSize: 18,
    color: COLORS.lightGrey,
    fontWeight: 500
  },
  selectedTextStyle: {
    fontSize: 18,
    color: COLORS.darkGrey,
    fontWeight: 500
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 48,
    fontSize: 18,
    paddingHorizontal: 8
  },
  itemContainerStyle: {
    borderRadius: 40
  }
});

const ddMultiStyles = StyleSheet.create({
  dropdown: {
    height: 52,
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  container: {
    backgroundColor: 'white',
    padding: 8,
    marginTop: 6,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});