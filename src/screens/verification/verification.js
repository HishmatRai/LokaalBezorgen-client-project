import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VerificationOtp from "./../../components/verification_otp/varification_otp";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Verification = (props) => {
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
      <View style={styles._header_main}>
        <TouchableOpacity>
        <Ionicons name="ios-arrow-back" size={24} color="#2B2B2B" />
        </TouchableOpacity>
        <Text style={{color:"#2B2B2B",fontSize:18}}>Bevestiging</Text>
        <Text style={{color:"#2B2B2B",fontSize:18}}></Text>
      </View>
      <ScrollView>
        <View style={{margin:20}}>
          <Text style={{color:"#5E5E5E",fontSize:15}}>Vul de bevestigingscode in</Text>
        <VerificationOtp />
        <View style={styles._proced}>
          <Text style={{color:"#5E5E5E",fontSize:15}}>Geen code ontvangen? </Text>
          <TouchableOpacity>
            <Text style={{color:"#2F80ED",fontSize:15}}> STUUR OPNIEUW</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} >
            <Text style={styles._button_txt}>Bevestigen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _header_main:{
    flexDirection:"row",
    marginTop:50,
    marginLeft:20,
    marginRight:20,
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:70
  },
  _proced:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:20,
    justifyContent:"flex-end"
  },
  button: {
    backgroundColor: "orange",
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

export default Verification;
