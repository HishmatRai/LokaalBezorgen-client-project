import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Search = (props) => {
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
  let SearchHistory = [
    {value : "Pizza"},
    {value : "French Fries"},
    {value : "Burger"},
    {value : "Sushi"},
]
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
          <View style={styles.Search_main}>
            <EvilIcons name="search" size={24} color="#999999" />
            <TextInput
              style={styles._input}
              placeholder="Zoek een gerecht..."
              placeholderTextColor="#999999"
            />
          </View>
          <Text style={{ color: "#2B2B2B", fontSize: 15, marginTop: 20 }}>
            Recente zoekopdrachten
          </Text>
          <View style={{marginTop:20}}>
              {SearchHistory.map((v,i)=>{
                  return(
                    <View style={styles.Search_History}>
                    <MaterialIcons name="access-time" size={24} color="#5E5E5E" />
                    <Text style={styles._search_histiry_text}>{v.value}</Text>
                  </View>
                  )
              })}
          </View>
        </View>
      </ScrollView>
      <View style={styles._tab_navigation_main}>
        <View style={styles._tab_navigation}>
          <TouchableOpacity>
            <Feather name="home" size={24} color="#5E5E5E" />
            <Text style={styles.empty_text}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="search" size={24} color="#FC6100" />
            <Text style={styles._active_dot}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="shopping-bag" size={24} color="#5E5E5E" />
            <Text style={styles.empty_text}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._active_tab}>
            <FontAwesome5 name="user-alt" size={24} color="#5E5E5E" />
            <Text style={styles.empty_text}></Text>
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
  Search_main: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#F2F3F5",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  _input: {
    // fontWeight: "bold",
    color: "gray",
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    width: "90%",
    // backgroundColor:"red"
  },
  Search_History: {
    flexDirection: "row",
    alignItems:"center",
    marginBottom:10
  },
  _search_histiry_text:{
      color:"#5E5E5E",
      marginLeft:10
  }
});

export default Search;
