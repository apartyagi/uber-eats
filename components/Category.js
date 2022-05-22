import React from "react";
import { Text, View, ScrollView, Image } from "react-native";

const data = [
  {
    image: require("../assets/images/shopping-bag.png"),
    name: "Shopping-Bag",
  },
  {
    image: require("../assets/images/fast-food.png"),
    name: "Fast-Food",
  },
  {
    image: require("../assets/images/desserts.png"),
    name: "Desserts",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    name: "Soft-Drink",
  },
  {
    image: require("../assets/images/coffee.png"),
    name: "Coffee",
  },
  {
    image: require("../assets/images/deals.png"),
    name: "Deals",
  },
  {
    image: require("../assets/images/bread.png"),
    name: "Bread",
  },
];

const Category = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ flexDirection: "row",backgroundColor:'white',marginTop:10}}
    >
      {data.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
          <Image
            source={item.image}
            style={{ width: 50, height: 40, resizeMode: "contain" }}
          />
          <Text style={{ fontWeight: "700", fontSize: 13 }}>
            {item.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Category;
