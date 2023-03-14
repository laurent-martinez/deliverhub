import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import {StarIcon } from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
const RestaurantCard = ({
    id,
    imageUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    className='bg-white mr-3 shadow'
    onPress={() => {
      navigation.navigate('Restaurant', {
        id,
        imageUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        long,
        lat,
      })
    }}
    >
      <Image
      src={urlFor(imageUrl).url()}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color='green' opacity={0.5} size={22} />
            <Text className='text-xs text-gray-400'>
                <Text className='text-green-500'>{rating}</Text> . {genre}</Text>
        </View>
        <View className='flex-row space-x-1 items-center'>
            <MapPinIcon color='gray' opacity={0.4} size={22} />
            <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard