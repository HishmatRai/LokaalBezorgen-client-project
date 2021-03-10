import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "./../screens/intro/intro";
import Welcome from "./../screens/welcome/welcome";
import Signup from "../screens/signup/signup";
import login from "../screens/login/login";
import Verification from "./../screens/verification/verification";
import ProfileCard from "./../screens/profile_card/profile_card";
import Search from "./../screens/search/search";
import Home from './../screens/Home/Home';
import Shopping from './../screens/Shopping/Shopping'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileCard"
          component={ProfileCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
             <Stack.Screen
          name="Shopping"
          component={Shopping}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
