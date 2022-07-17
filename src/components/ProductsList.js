import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { MinusIcon } from '../assets/svg/MinusIcon'
import { PlusIcon } from '../assets/svg/PlusIcon'
import { rawData } from '../dummy-data/dummyData'
import { addToCart, cartQtyDown, cartQtyUp } from '../store/cart/cartSlice'

const ProductsList = () => {
    const { products } = useSelector((e) => e.cart);

    const dispatch = useDispatch();

    const handleAddtoCart = (item) =>  dispatch(addToCart(item))

    const handleCartUp = (item)=> dispatch(cartQtyUp(item))
    const handleCartDown = (item)=> dispatch(cartQtyDown(item))
    

    const ProductCounter = ({ item }) => {
        const temp = products?.filter((e) => e.id === item?.id)

        return (
            <>
                {
                    temp[0] ?
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => handleCartUp(item)}>
                                <PlusIcon color={'#c765cc'} />
                            </TouchableOpacity>
                            <Text>{temp[0]?.qty}</Text>
                            <TouchableOpacity onPress={() => handleCartDown(item)}>
                                <MinusIcon color={'#c765cc'} />
                            </TouchableOpacity>
                        </View>
                        : <TouchableOpacity onPress={() => handleAddtoCart(item)}>
                            <Text style={{ color: '#FFFFFF', backgroundColor: '#16a80c', borderRadius: 9, padding: 5, textAlign: 'center', marginTop: 5 }}>add to cart</Text>
                        </TouchableOpacity>
                }

            </>
        )
    }
    const RenderList = ({ item, index }) => {
        return (
            <View style={{ width: '50%', paddingHorizontal: 20 }}>
                <Image source={item?.image} style={{ resizeMode: 'contain', width: 150, height: 150, alignSelf: 'center' }} />
                <Text style={{ fontSize: 16 }}>{item?.name}</Text>
                <Text style={{ fontSize: 14, marginTop: 5 }}>{item?.umo}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text>{item?.price}৳</Text>
                    <Text style={{ marginLeft: 20 }}>{item?.discount_price}৳</Text>
                </View>
                <ProductCounter item={item} />
            </View>
        )
    }
    return (

        <FlatList
            numColumns={2}
            data={rawData}
            key={(item) => item.id}
            renderItem={RenderList}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />

    )
}

export default ProductsList;