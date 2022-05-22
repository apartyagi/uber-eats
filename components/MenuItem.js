import React from "react";
import { View, Text, Image } from "react-native";
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MENUITEMS=[

    
    {
        name:'Tandoori Chicken',
        price:'380',
        key:'1',
        desciption:'Amazing Indian Dish With Some Special Masala With love chicken of the sizzles',
        image:'https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg'
    },
    {
        name:'Biryani',
        price:'80',
        key:'2',
        desciption:'veg biryani with chicken',
        image:'https://thumbs.dreamstime.com/z/chicken-dum-biryani-white-bowl-traditional-indian-one-pot-dish-background-high-angle-view-156498926.jpg'
    },
    {
        name:'Sahi Paneer',
        price:'280',
        key:'3',
        desciption:'Sahi Paneer made with without garlic and and best qulatity paneer and milk use to make this recipie',
        image:'https://media.istockphoto.com/photos/paneer-butter-masala-or-cheese-cottage-curry-popular-indian-menu-in-picture-id669312136?k=20&m=669312136&s=612x612&w=0&h=drT5xbcRH35tZMwfyA2AV5t6Z0k6H2kTZzCbI8z30Ik='
    },
    {
        name:'Biryani',
        price:'80',
        key:'4',
        desciption:'veg biryani with chicken',
        image:'https://thumbs.dreamstime.com/z/chicken-dum-biryani-white-bowl-traditional-indian-one-pot-dish-background-high-angle-view-156498926.jpg'
    },
    {
        name:'Panner Tikka',
        price:'110',
        key:'5',
        desciption:'Paneer Tikka with Souce and mionies',
        image:'https://photo.foodgawker.com/wp-content/uploads/2020/05/3594689.jpg'
    },
    {
        name:'Biryani',
        price:'60',
        key:'6',
        desciption:'veg biryani with chicken',
        image:'https://thumbs.dreamstime.com/z/chicken-dum-biryani-white-bowl-traditional-indian-one-pot-dish-background-high-angle-view-156498926.jpg'
    }
]

const MenuItem = ({restorantname}) => {

  const dispatch = useDispatch();

  const selectItem = (item) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restorantname: restorantname,

      },
    });

  return (
        <FlatList 
        showsVerticalScrollIndicator={false}
        data={MENUITEMS}
        renderItem={(pop)=>{
        return(
            <View
            key={pop.key}
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin:20,
            }}
            >
            <BouncyCheckbox 
                fillColor="green"
                onPress={() => selectItem(pop.item)}

            />
            <MenuName name={pop.item.name} desc={pop.item.desciption} price={pop.item.price} />
            <MenuImage img={pop.item.image} />
            <View style={{width:'100%',height:1,backgroundColor:"#eee"}}/>
          </View>
                )
        }}
        
        />
  );
};

const MenuName = (props) => {
  return (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <Text style={{ fontSize: 19, fontWeight: "700" }}>{props.name}</Text>
      <Text style={{ fontStyle: "italic" }}>
        {props.desc}
      </Text>
      <Text style={{ fontWeight: "bold" }}>$ {props.price}</Text>
    </View>
  );
};
const MenuImage = (props) => {
  return (
    <View>
      <Image
        source={{uri:props.img}}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
    </View>
  );
};

export default MenuItem;
