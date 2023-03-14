import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { MapPinIcon, ArrowLeftIcon, StarIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';


const RestaurantScreen = () => {
    const dispatch = useDispatch();
    const {params : {
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
    }} = useRoute();

    const navigation = useNavigation();

    useEffect(() => {
        dispatch(setRestaurant({
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
        }))
    }, [dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    });
  return (
    <>
    <BasketIcon />
    <ScrollView>
        <View className='relative'>
            <Image 
            src={urlFor(imageUrl).url()}
            className='w-full h-56 bg-gray-300 p-4'
            />
            <TouchableOpacity 
            className='absolute top-14 left-5 bg-gray-100 p-2 rounded-full'
            onPress={navigation.goBack}>
                <ArrowLeftIcon size={20} color="#00CCBB"/>
            </TouchableOpacity>
        </View>
        <View 
        className='bg-white'>
            <View className='px-4 pt-4 '>
                <Text className='text-3xl font-bold'>
                    {title}
                </Text>
                <View className='flex-row space-x-2 my-1'>
                    <View className='flex-row items-center space-x-1'>
                        <StarIcon color='green' size={22} opacity={0.5}/>
                        <Text className='text-xs text-gray-400'>
                <Text className='text-green-500'>{rating}</Text> . {genre}</Text>
                    </View>
                    <View className='flex-row items-center space-x-1'>
                        <MapPinIcon color='green' size={22} opacity={0.4}/>
                        <Text className='text-xs text-gray-400'>Nearby .{address}</Text>
                    </View>
                </View>
                <Text className='text-gray-500 mt-2 pb-4'>
                    {shortDescription}
                </Text>
            </View>
            <TouchableOpacity className='flex-row items-center p-4 space-x-2 border-y border-gray-300'>
                <QuestionMarkCircleIcon color='gray' size={20} opacity={0.6} />
                <Text className='pl-2 flex-1 text-md font-bold'>Have a food allergy?</Text>
                <ChevronRightIcon color='#00CCBB' />
            </TouchableOpacity>
        </View>
        <View className='pb-36'>
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                Menu
            </Text>
            {/* DishRows */}
            {dishes?.map(dish => (
                <DishRow 
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.description}
                image={dish.image}
                price={dish.price}
                />
            ))}
        </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen