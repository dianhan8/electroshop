import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { styles } from './../component/Styles'

export const Texts = (props) => (
    <Text>
        {props.text}
    </Text>
)

export const ProductList = (props) => {
    return (
    <FlatGrid
        itemDimension={130}
        items={props.data}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({ item, index }) => (
            <TouchableOpacity key={index} onPress={()=> props.navigation.navigate('Details',{
                id: item.id,
                index: index
            })}>
                <View style={styles.productlist}>
                    <Text style={[styles.fontSize22, { marginBottom: 10 }]}>{item.name}</Text>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={[styles.fontSize20, styles.margin10]} >Rp.{item.price}</Text>
                    <Text style={styles.fontSize16}>Stock : {item.stock}</Text>
                    <Text>Category : {item.category}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
)}