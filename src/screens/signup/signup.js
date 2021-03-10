import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, TextInput, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Entypo, Ionicons, MaterialIcons, Zocial } from '@expo/vector-icons';
import HidePassword from './../../components/HidePassword/HidePassword'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Signup = (props) => {
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
            <Text style={styles._title}>NAAM</Text>
            <View style={styles._input_main}>
              <TextInput style={styles._input} />
              <Ionicons name="checkmark-sharp" size={24} color="#2B2B2B" />
            </View>
          </View>

          <View style={styles._email_input_view}>
            <Text style={styles._title}>E-MAILADRES</Text>
            <View style={styles._input_main}>
              <TextInput style={styles._input} />
              <Ionicons name="checkmark-sharp" size={24} color="#2B2B2B" />
            </View>
          </View>

          <View style={styles._email_input_view2}>
            <Text style={styles._title}>WACHWOORD</Text>
            <HidePassword />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("ProfileCard")}>
            <Text style={styles._button_txt}>Aanmelden</Text>
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
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginTop: 30
  },
  _email_input_view2: {
    width: "100%",
    marginTop: 30
  },
  _input: {
    color: "gray",
    height: 40,
    // backgroundColor:"red",
    width: "90%",
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
  _title: {
    color: "gray",
    fontSize: 12,
    letterSpacing: 0
  },
  _input_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default Signup;