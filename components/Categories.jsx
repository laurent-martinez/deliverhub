import {  Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import { client, urlFor } from '../sanity'



const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == 'category']`).then(data => setCategories(data))
  }, [])
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}>
      {categories?.map(category => {
        return (
          <CategoriesCard
          key={category._id}
          imageUrl={urlFor(category.image).width(200).url()}
          title={category.name}
          />
        )
      })}
  
    </ScrollView>
  )
}

export default Categories