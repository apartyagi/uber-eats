import { React, useState } from "react";
import { View, Text, } from "react-native";
import { TouchableOpacity } from "react-native";
const Head = (props) => {
  
  return (
    <View style={{
      flexDirection: 'row',
        alignSelf:"center",
        backgroundColor:'#fff',
    }}>
      <Buton
        type="Delivery"
        activetab={props.actbtn}
        setfirstBtn={props.setactbtn}
      ></Buton>
      <Buton
        type="Pickup"
        activetab={props.actbtn}
        setfirstBtn={props.setactbtn}
      ></Buton>
    </View>
  );
};

const Buton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.type === props.activetab?"black":"white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => {props.setfirstBtn(props.type)}}
      >
        <Text
          style={{
            color: props.type === props.activetab?"white":"black",
            fontSize: 15,
            fontWeight: "900",
          }}
        >
          {props.type}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default Head;
