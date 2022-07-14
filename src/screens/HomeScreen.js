import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ProductsList from '../components/ProductsList';

const HomeScreen =()=> {
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={{textAlign:'center', marginVertical:20}}>Welcome to our app</Text>
      <ProductsList/>
    </SafeAreaView>
  )
}

export default HomeScreen;