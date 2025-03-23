import { View } from 'react-native'
import React from 'react'
import ShimmerLoader from '../ShimmerLoader';

const BranchCardWideSkeleton: React.FC = () => {
    return (
        <View className='bg-white flex-1 h-28 m-2 rounded-xl shadow-lg shadow-slate-300 justify-center items-center p-8'>
            <ShimmerLoader lineCount={2}/>
        </View>
    )
}

export default BranchCardWideSkeleton;