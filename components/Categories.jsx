import {  Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'



const Categories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/fa9f1efb-ab98-49ca-94f5-8388ab914a74/grid_0.png' title='testing 1'/>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/1d9c2ab8-4f2c-40b8-a68b-e8ca4ad8ef16/grid_0.png' title='testing 2'/>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/fa9f1efb-ab98-49ca-94f5-8388ab914a74/grid_0.png' title='testing 3'/>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/1d9c2ab8-4f2c-40b8-a68b-e8ca4ad8ef16/grid_0.png' title='testing 3'/>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/fa9f1efb-ab98-49ca-94f5-8388ab914a74/grid_0.png' title='testing 3'/>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/1d9c2ab8-4f2c-40b8-a68b-e8ca4ad8ef16/grid_0.png' title='testing 3'/>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/fa9f1efb-ab98-49ca-94f5-8388ab914a74/grid_0.png' title='testing 3'/>
    <CategoriesCard imageUrl='https://cdn.midjourney.com/1d9c2ab8-4f2c-40b8-a68b-e8ca4ad8ef16/grid_0.png' title='testing 3'/>
    </ScrollView>
  )
}

export default Categories