import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);
  return (
    <>
    {items.length > 0 && (
          <View className='w-full absolute bottom-10 z-50'>
      <TouchableOpacity className='bg-[#00CCBB] flex-row p-4 mx-5 rounded-lg items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
        <Text 
        onPress={()=> navigation.navigate('Basket')}
        className='flex-1 text-lg font-extrabold text-white text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>{basketTotal}€</Text>
      </TouchableOpacity>
    </View>
    )}
    </>
  )
}

export default BasketIcon