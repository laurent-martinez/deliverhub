import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() =>{
      return navigation.navigate('Delivery')
    },4000)
  
    
  }, [])
  
  return (
    <SafeAreaView className='bg-[#de8270] flex-1 justify-center items-center'>
    <Animatable.Image 
    source={require('../assets/scooter.gif')}
    animation='slideInUp'
    iterationCount={1}
    className='h-96 w-96'/>
      <Animatable.Text 
      animation='slideInUp'
      iterationCount={1}
      className='text-lg text-white font-bold text-center mb-4'>Waiting for restaurant to accept your order!</Animatable.Text>
      <Progress.Circle size={40} indeterminate={true} color='#00CCBB' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;