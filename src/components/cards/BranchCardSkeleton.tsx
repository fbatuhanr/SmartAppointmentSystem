import { View } from 'react-native'
import React from 'react'
import ShimmerLoader from '../ShimmerLoader'

const BranchCardSkeleton = () => {
    return (
        <View className='bg-white w-36 h-28 mr-2 py-4 px-2 rounded-xl shadow-md shadow-slate-300 items-center gap-y-1 relative'>
            <ShimmerLoader />
        </View>
    )
}

export default BranchCardSkeleton