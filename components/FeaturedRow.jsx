import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeatureRow = ({title,description,id}) => {
  return (
    <View>
      <View className='mt-4 flex-row intems-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className='text-xs text-gray-400 px-4'>{description}</Text>
      <ScrollView 
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      >
        {/* Restaurants cards  */}
        <RestaurantCard
        id='123'
        imageUrl=''
        title=''
        rating=''
        genre=''
        address=''
        shortDescription=''
        dishes=''
        long=''
        lat=''/>
      </ScrollView>
    </View>
  )
}

export default FeatureRow