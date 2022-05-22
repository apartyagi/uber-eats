import React from 'react'
import {View,Text} from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { TouchableOpacity } from 'react-native'

const BottomTabs = () => {
  return (      
    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:30,marginTop:5}}>
        <BottomData name="home" text="Home"/>
        <BottomData name="search" text="Browse"/>
        <BottomData name="shopping-bag" text="Grocery"/>
        <BottomData name="receipt" text="Orders"/>
        <BottomData name="user" text="Account"/>
    </View>
  )
}

const BottomData=(props)=>{
    return(
        <TouchableOpacity>
            <View>
        <FontAwesome5 name={props.name} size={20}  style={{alignSelf:'center',marginBottom:3,paddingVertical:2}} />
        <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>

    )
}
export default BottomTabs;