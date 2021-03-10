import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Dimensions,Image } from "react-native";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Intro = (props) => {
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
  setTimeout(() => {
   props.navigation.navigate("Welcome");
  }, 3000);
  return (
    <View style={styles.container} >
 <ImageBackground source={require('./../../images/intro_background_img.png')} style={styles._image}>
 <Image source={require('./../../images/logo.png')} style={styles._logo} />
 </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  _image: {
    flex: 1,
    resizeMode: 'cover',
    height: "100%"
},
_logo: {
    width: 170,
    height: 170,
    marginTop: "70%",
    marginLeft:50
},
});

export default Intro;