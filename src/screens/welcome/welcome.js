import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Welcome = (props) => {
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
      <ImageBackground
        source={require("./../../images/welcome.png")}
        style={styles._image}
      >
        <ScrollView>
          <View style={styles._main}>
            <View style={{ marginTop: 20,marginLeft:20,marginRight:20 }}>
              <Text style={styles.welcome_heading}>Welkom!</Text>
              <Text style={{ color: "#5E5E5E" }}>
                Log in of registreer voor de optimale ervaring!
              </Text>
              <View style={styles._input_main}>
                <Text style={{ color: "#5E5E5E" }}>Telefoonnummer</Text>
                <TextInput style={styles.textInput} keyboardType="numeric" />
              </View>
              <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("login")}>
            <Text style={styles._button_txt}>Registreren</Text>
          </TouchableOpacity>
    

            </View>
        <View style={styles._line}></View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
    height: "60%",
  },
  _main: {
    backgroundColor: "white",
    marginTop: "100%",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    height: "60%",
  },
  welcome_heading: {
    fontSize: 35,
    color: "#18416E",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  _input_main: {
    marginTop: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  textInput: {
    height: 40,
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 20
  },
  _button_txt: {
    // fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "black",
    fontSize: 18,
    letterSpacing: 2
  },
  _line:{
      backgroundColor:"black",
      height:5,
      width: "50%",
      alignItems:"center",
      alignSelf:"center",
      borderRadius:50,
      marginTop:30

  }
});

export default Welcome;
