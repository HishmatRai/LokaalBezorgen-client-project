import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome5, FontAwesome, Entypo ,MaterialIcons,SimpleLineIcons} from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ProfileCard = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <ScrollView>
        <View style={{ margin: 20 }}>
          <View style={styles._profile_main}>
            <Image
              source={require("./../../images/User-Icon-PNG.png")}
              style={styles._user_profile}
            />
          </View>
          <Text style={styles.user_name}>Name</Text>
          {/* ======================== */}
          <View style={styles.different_card_main}>
            <View style={styles._card_first_row}>
              <View style={styles._card_main}>
                <TouchableOpacity style={styles._order}>
                <Image
              source={require("./../../images/order.png")}
              style={{width:19,height:23}}
            />
                </TouchableOpacity>
                <Text style={styles.card_heading}>Bestellingen</Text>
              </View>
              <View style={styles._card_main}>
                <TouchableOpacity style={styles._profile_card}>
                  <Feather name="user" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.card_heading}>Profiel</Text>
              </View>
              <View style={styles._card_main}>
                <TouchableOpacity style={styles._profile_card}>
                  <FontAwesome5 name="heart" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.card_heading}>Favorieten</Text>
              </View>
            </View>
            <View style={styles._card_first_row}>
              <View style={styles._card_main}>
                <TouchableOpacity style={styles._profile_card}>
                <Image
              source={require("./../../images/Offer.png")}
              style={styles.order_icon}
            />
                </TouchableOpacity>
                <Text style={styles.card_heading}>Aanbiedingen</Text>
              </View>
              <View style={styles._card_main}>
                <TouchableOpacity style={styles._profile_card}>
                <MaterialIcons name="payment" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.card_heading}>Betalingen</Text>
              </View>
              <View style={styles._card_main}>
                <TouchableOpacity style={styles._profile_card}>
                <SimpleLineIcons name="location-pin" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.card_heading}>Adressen</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} >
            <Text style={styles._button_txt}>Uitloggen</Text>
          </TouchableOpacity>
          </View>
          {/* ======================== */}
        </View>
      </ScrollView>
      <View style={styles._tab_navigation_main}>
        <View style={styles._tab_navigation}>
          <TouchableOpacity>
            <Feather name="home" size={24} color="#5E5E5E" />
            <Text style={styles.empty_text}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="search" size={24} color="#5E5E5E" />
            <Text style={styles.empty_text}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="shopping-bag" size={24} color="#5E5E5E" />
            <Text style={styles.empty_text}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._active_tab}>
            <FontAwesome5 name="user-alt" size={24} color="#FC6100" />
            <Text style={styles._active_dot}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._line}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _profile_main: {
    width: 130,
    height: 130,
    backgroundColor: "#E8EDED",
    borderRadius: 100,
    marginTop: 40,
    alignSelf: "center",
    alignSelf: "center",
  },
  _user_profile: {
    width: 130,
    height: 130,
    borderRadius: 100,
    alignSelf: "center",
    alignSelf: "center",
  },
  user_name: {
    fontSize: 30,
    marginTop: 10,
    color: "#18416E",
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 10,
    textAlign: "center",
  },
  //   tab navigation
  _tab_navigation_main: {
    bottom: 0,
  },
  _tab_navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingTop: 15,
  },
  _active_dot: {
    color: "#FC6100",
    fontSize: 30,
    textAlign: "center",
    marginTop: -20,
  },
  _active_tab: {
    textAlign: "center",
    alignItems: "center",
  },
  _line: {
    backgroundColor: "#000000",
    height: 5,
    width: "40%",
    marginBottom: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 100,
  },
  //   tab navigation end
  different_card_main: {},
  _card_first_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  _card_main: {
    alignItems: "center",
  },
  _order: {
    backgroundColor: "#FC6100",
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  card_heading: {
    color: "#5E5E5E",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  _profile_card: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation: 1,
  },
  order_icon:{
      height:24,
      width:24
  },
  button: {
    backgroundColor: "#F2F3F5",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 50
  },
  _button_txt: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "black",
    fontSize: 18,
    letterSpacing: 2
  },
});

export default ProfileCard;
