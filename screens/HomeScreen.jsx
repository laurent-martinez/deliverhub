import { Text, SafeAreaView, Image, View, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import logoTezuka from '../logoTezuka.png'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, ServerStackIcon, UserIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    return () => {
    };
  }, [])
  return (
    <SafeAreaView className='bg-white pt-14'>
        <View className='flex-row pb-3 mx-2 items-center justify-between space-x-2 px-2'>
          <Image   
          source={logoTezuka}
          className='h-10 w-10 p-4' 
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>
              Current Location
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>
          <UserIcon size={35} color='#00CCBB' />
        </View>
        <View className='flex-row items-center space-x-2 mx-2 pb-2 px-2'>
          <View className='flex-row flex-1 space-x-2 items-center bg-gray-200 p-2'>
            <MagnifyingGlassIcon  color='gray' size={20} />
            <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'/>
          </View>
          <AdjustmentsVerticalIcon  color='#00CCBB' />
        </View>
        <ScrollView className='bg-gray-100'>
          {/* categories */}
          <Categories/>
          {/* Feature rows */}
          <FeaturedRow
          id='12'
          title='featured'
          description='paid placement from our partners'
            />
             <FeaturedRow
             id='123'
          title='Tasty discounts'
          description='everyone s been enjoying this juicy discounts!'
            />
             <FeaturedRow
             id='1234'
          title='Offers near you!'
          description='Why not support your local businesses?'
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen