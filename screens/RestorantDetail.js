import React from "react";
import { View, Text } from "react-native";
import About from "../components/About";
import MenuItem from "../components/MenuItem";
import ViewCart from "../components/ViewCart";
import { useSelector,useDispatch } from "react-redux";


const RestorantDetail = ({route}) => {
  return (
    <View style={{height:'100%'}} >
      <About route={route}/>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "black",
          marginVertical: 10,
        }}
      />

      <MenuItem restorantname={route.params.name}/>
      <View style={{position:"absolute",top:30,right:10,width:45,paddingHorizontal:0}}>
      <ViewCart restorantname={route.params.name} />
      </View>
    </View>
  );
};

export default RestorantDetail;
