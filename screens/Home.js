import { React, useState, useEffect } from "react";
import Category from "../components/Category";
import Head from "../components/head";
import Search from "../components/search";
import { Resturantsitems, YEL } from "../components/Resturantsitems";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import BottomTabs from "../components/BottomTabs";

const Home = ({navigation}) => {
  const [resData, setresData] = useState([]);
  const [firstBtn, setfirstBtn] = useState("Delivery");

  const get_yelp_resto_data = async () => {
    let city='SanDiego';
    let API_KEY = `_AwmngSOsb5-qZB_3C5GSDY07fRoZXcOS7BcjSlcHZmPfwsK5Pf49BMap6V0A8EY8jefqz2sfU4KQSDSkId_kxLqOQCs_L6VeJe-V9LwkSi7tjCCUqprYJwNzUwzYnYx`;
    let yelp_url =
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    const res = await fetch(yelp_url, apiOptions);
    const json = await res.json();
    return setresData(json.businesses.filter((business)=>
     business.transactions.includes(firstBtn.toLowerCase())
    ));
  };

  useEffect(() => {
    get_yelp_resto_data();
  }, [firstBtn]);

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Head actbtn={firstBtn} setactbtn={setfirstBtn} />
        <Search />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        <Resturantsitems restorants={resData} navigation={navigation} />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default Home;
