import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, TextInput, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Entypo, Ionicons, MaterialIcons, Zocial } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const login = (props) => {
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
    <View style={styles.container} >
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <View style={styles._main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._sign_up_heading}>Aanmelden</Text>
          <View style={styles._email_input_view}>
            <TextInput style={styles._input} placeholder="Naam" />
          </View>
          <View style={styles._email_input_view}>
            <TextInput style={styles._input} placeholder="E-mailadres" />
          </View>
          <View style={styles._email_input_view}>
            <TextInput style={styles._input} placeholder="Wachtwoord" secureTextEntry={true} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Verification")}>
            <Text style={styles._button_txt}>login</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 30 }}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  _main: {
    margin: 20
  },
  _sign_up_heading: {
    fontSize: 35,
    marginTop: 50,
    color: "#18416e",
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 30
  },
  _email_input_view: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginTop:30
  },
  _input: {
    // fontWeight: "bold",
    color: "gray",
    height: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 50
  },
  _button_txt: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "black",
    fontSize: 18,
    letterSpacing: 2
  },
});

export default login;