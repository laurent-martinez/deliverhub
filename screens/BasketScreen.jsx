import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { selectRestaurantItems } from '../slices/restaurantSlice';
import {removeFromBasket, selectBasketItems, selectBasketTotal} from '../slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurantItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
      const groupedItems = items.reduce((results,item)=> {
        (results[item.id] = results[item.id]|| []).push(item)
        return results;
      },{})
      setGroupedItemsInBasket(groupedItems);
  }, [items])

  return (
    <SafeAreaView className='flex-1 bg-white pt-14 relative'>
      <View className='bg-gray-100 flex-1'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View>
            <Text className='text-lg text-center font-bold'>Basket</Text>
            <Text className='text-center text-gray-400'>{restaurant.title}</Text>
          </View>
          <TouchableOpacity
          onPress={navigation.goBack}
          className='rounded-full bg-gray-100 absolute top-0 right-5'>
            <XCircleIcon  color='#00CCBB' height={50} width={50} />
          </TouchableOpacity>
        </View>
          <View className='flex-row items-center space-x-4 px-4 py-4 bg-white my-5'>
            <Image 
            src='https://cdn.midjourney.com/670b1bd9-1204-4d71-9475-835be54a1358/grid_0.png'
            className='h-12 w-12 bg-gray-300 p-4 rounded'
            />
            <Text className='flex-1'>Delivery in 25-50 min</Text>
            <TouchableOpacity>
              <Text className='text-[#00CCBB]'>Change</Text>
            </TouchableOpacity>
          </View>
          <ScrollView className='divide-y divide-gray-200'>
            {Object.entries(groupedItemsInBasket).map(([key,items])=>{
              return (
              <View key={key} 
              className='flex-row items-center space-x-3 px-5 py-2 bg-white'
              >
                <Text className='text-[#00CCBB]'>{items.length} x</Text>
                <Image 
                src={urlFor(items[0]?.image).url()}
                className='h-12 w-12 rounded'
                />
                <Text className='flex-1'>{items[0]?.name}</Text>
                <Text className='text-gray-600'>{items[0]?.price} €</Text>
                <TouchableOpacity>
                  <Text
                  className='text-[#00CCBB] text-xs'
                  onPress={() => dispatch(removeFromBasket({id: key}))}
                  >
                  Remove
                  </Text>
                </TouchableOpacity>
              </View> )
            })}
          </ScrollView>
          <View className='p-5 bg-white mt-5 space-y-4'>
            <View className='flex-row justify-between'>
              <Text className='text-gray-400'>Subtotal</Text>
              <Text className='text-gray-400'>{basketTotal} €</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className='text-gray-400'>Delivery Fees</Text>
              <Text className='text-gray-400'>{4.99} €</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text>Order Total</Text>
              <Text className='font-extrabold'>{basketTotal + 4.99} €</Text>
            </View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('PreparingOrder')}
            className='rounded-lg bg-[#00CCBB] p-4'>
              <Text className='text-white text-center text-lg'>Place Order</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen