import {Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoriesCard = ({imageUrl, title}) => {
  return (
    <TouchableOpacity className='mr-2 relative'>
        <Image 
        src={imageUrl}
        className="h-20 w-20 rounded"
        />
      <Text className=' text-[#032e2b] font-bold mx-auto'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard