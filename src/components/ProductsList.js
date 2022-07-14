import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { rawData } from '../dummy-data/dummyData'

const ProductsList = () => {

    const handleAddtoCart =(item)=>{

    }
    const RenderList = ({ item, index }) => {
        return (
            <View style={{width:'50%', paddingHorizontal:20}}>
                <Image source={item?.image} style={{ resizeMode: 'contain', width: 150, height: 150, alignSelf:'center' }} />
                <Text style={{fontSize:16}}>{item?.name}</Text>
                <Text style={{fontSize:14, marginTop:5}}>{item?.umo}</Text>
                <View style={{flexDirection:'row', marginTop:5}}>
                <Text>{item?.price}৳</Text>
                <Text style={{marginLeft:20}}>{item?.discount_price}৳</Text>
                </View>
                <TouchableOpacity onPress={()=> handleAddtoCart(item)}>
                    <Text style={{color:'#FFFFFF', backgroundColor:'#16a80c', borderRadius:9, padding:5, textAlign:'center', marginTop:5}}>add to cart</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (

            <FlatList
                numColumns={2}
                data={rawData}
                key={(item) => item.id}
                renderItem={RenderList}
                ItemSeparatorComponent={()=> <View style={{height:20}}/>}
            />

    )
}

export default ProductsList;