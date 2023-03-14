import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurantItems } from '../slices/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurantItems);
  return (
    <View className='bg-[#00CCBB] flex-1 pt-12'>
        <View className='z-50'>
            <View className='flex-row items-center justify-between p-5'>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                >
                  <XCircleIcon color='white' size={30}/>
                </TouchableOpacity>
                <Text className='font-light text-lg text-white'>Order Help</Text>
            </View>
            <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md '>
                <View className='flex-row justify-between'>
                    <View>
                        <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                        <Text className='text-3xl font-bold'>45-55 Minutes</Text>
                    </View>
                    <Image 
                    source={require('../assets/deliveryScooter.png')}
                    className='h-20 w-20'
                    />
                </View>
                <Progress.Bar size={30} progress={0.5} color='#00CCBB' indeterminate={true}/>
                <Text className='mt-3 text-gray-500'>Your order at {restaurant.title} is being prepared</Text>
            </View>
        </View>
        <MapView
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.00005,
            longitudeDelta: 0.00005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
        >
            <Marker 
            coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
            }}
            title={restaurant.title}
            identifier='origin'
            description={restaurant.short_description}
            pinColor='#00CCBB'
            />
        </MapView>
        <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
            <Image 
            source={require('../logoTezuka.png')}
            className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
            />
            <View className='flex-1'>
                <Text className='text-lg'>Laurent Martinez</Text>
                <Text className='text-gray-400'>Your driver</Text>
            </View>
            <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
        </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen