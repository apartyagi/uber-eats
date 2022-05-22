import React from 'react';
import {View,Text,Image} from 'react-native';

const About = ({route}) => {
  const {name,price,image,rating,review,category}=route.params;
  return (
    <View>
      <AboutImage imga={image}/>
      <AboutDetails names={name} review={review} rating={rating} price={price} cat={category} /> 
    </View>
  )
}


const AboutImage=(props)=>{
  return(
    <>
      <Image source={{uri:props.imga}} style={{width:'100%' ,height:180}} />
      </>
  )
}

const AboutDetails=(props)=>{
  let arro=props.cat.map((dta)=>dta.title).join(" . ");
  
  return(
    <View style={{marginHorizontal:20,marginVertical:10}}>
    <Text style={{fontWeight:'bold', fontSize:25}}>{props.names}</Text>
    <Text style={{color:'black'}}>{arro} ●     💵{props.price}  ●  ⭐{props.rating}  ●   ({props.review}+ review)</Text>
    </View> 
        
  )
}


export default About