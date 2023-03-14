import { View, Text, TouchableOpacity , Image} from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../slices/basketSlice'

const DishRow = ({id,name,image,price,description}) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector(state => selectBasketItemsWithId(state,id));
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({id,name,image,price,description}))
    }
    const removeItemFromBasket = () => {
        if(!items.length > 0) return;
        dispatch(removeFromBasket({id}))
    }
  return (
    <>
    <TouchableOpacity
    onPress={() => setIsPressed(!isPressed)}
    className={`bg-white p-4 border ${isPressed && "border-b-0"} border-gray-200`}>
        <View className='flex-row'>
            <View className='flex-1 pr-2'>
                <Text className='text-lg mb-1' >{name}</Text>
                <Text className='text-gray-400'>{description}</Text>
                <Text>{price} €</Text>
            </View>
            <View>
                <Image
                style={{
                    borderWidth: 1,
                    borderColor: '#F3F3F4'
                }}
                src={urlFor(image).url()}
                className='h-20 w-20 bg-gray-300 -4'
                />
            </View>
        </View>
    </TouchableOpacity>
    {isPressed && (
        <View className='bg-white px-4'>
            <View className='flex-row space-x-2 pb-3 items-center'>
                <TouchableOpacity onPress={removeItemFromBasket}>
                    <MinusCircleIcon 
                    color={items.length > 0 ? '#00CCBB' : 'gray'}
                    size={40}/>
                </TouchableOpacity>
                    <Text>{items.length}</Text>
                    <TouchableOpacity
                    onPress={addItemToBasket}>
                    <PlusCircleIcon color= '#00CCBB' size={40}></PlusCircleIcon> 
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow