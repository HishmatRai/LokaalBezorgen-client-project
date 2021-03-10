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
const Shopping = (props) => {
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
                <View style={{ margin: 20, alignSelf: "center", justifyContent: "center" }}>

                    <Text style={{ color: "red", fontSize: 30 }}>Shopping</Text>

                </View>
            </ScrollView>
            <View style={styles._tab_navigation_main}>
                <View style={styles._tab_navigation}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                        <Feather name="home" size={24} color="#5E5E5E" />
                        <Text style={styles.empty_text}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                        <FontAwesome name="search" size={24} color="#5E5E5E" />
                        <Text style={styles.empty_text}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Shopping")}>
                        <Entypo name="shopping-bag" size={24} color="#FC6100" />
                        <Text style={styles._active_dot}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._active_tab} onPress={() => props.navigation.navigate("ProfileCard")}>
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


});

export default Shopping;
