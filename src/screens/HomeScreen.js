import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ProductsList from '../components/ProductsList';
import { useSelector } from 'react-redux';

const HomeScreen =()=> {
    const {products} = useSelector((e)=>e.cart)

    // console.log(products,'------ products');
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={{textAlign:'center', marginVertical:20}}>Welcome to our app</Text>
      <ProductsList/>
    </SafeAreaView>
  )
}

export default HomeScreen;