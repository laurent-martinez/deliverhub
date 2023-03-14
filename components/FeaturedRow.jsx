import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { client } from '../sanity'

const FeatureRow = ({title,description,id}) => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() =>{
    client.fetch(`*[_type == 'featured' && _id == $id ]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
          type-> {
          name
          }
        },
    }[0]`,{id}).then(data => setRestaurants(data?.restaurants))
  },[id])

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
      className='pt-4 mb-4'
      >
        {/* Restaurants cards  */}
        {restaurants?.map(restaurant => {
          return(
        <RestaurantCard
        key={restaurant._id}
        id={restaurant._id}
        imageUrl={restaurant.image}
        title={restaurant.name}
        rating={restaurant.rating}
        genre={restaurant.type?.name}
        address={restaurant.address}
        shortDescription={restaurant.short_description}
        dishes={restaurant.dishes}
        long={restaurant.long}
        lat={restaurant.lat}
        />)
        })}

               {/* <RestaurantCard
        id={123}
        imageUrl='https://cdn.midjourney.com/6de48ab6-1c44-445a-8d69-b18e4e054eb9/grid_0.png'
        title='Delicious Pho'
        rating={4.5}
        genre='Vietnamese'
        address='1234 Main St'
        shortDescription='this is a short description'
        dishes={[]}
        long={20}
        lat={0}
        />
               <RestaurantCard
        id={123}
        imageUrl='https://cdn.midjourney.com/6de48ab6-1c44-445a-8d69-b18e4e054eb9/grid_0.png'
        title='Delicious Pho'
        rating={4.5}
        genre='Vietnamese'
        address='1234 Main St'
        shortDescription='this is a short description'
        dishes={[]}
        long={20}
        lat={0}
        />
               <RestaurantCard
        id={123}
        imageUrl='https://cdn.midjourney.com/6de48ab6-1c44-445a-8d69-b18e4e054eb9/grid_0.png'
        title='Delicious Pho'
        rating={4.5}
        genre='Vietnamese'
        address='1234 Main St'
        shortDescription='this is a short description'
        dishes={[]}
        long={20}
        lat={0}
        />  */}
      </ScrollView>
    </View>
  )
}

export default FeatureRow