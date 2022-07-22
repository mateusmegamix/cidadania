//This is an example code for NavigationDrawer//
import React, { Component } from "react";
//import react in our code.
import { View, Image, TouchableOpacity, Platform } from "react-native";
// import all basic components

//Import React Navigation
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

//Import external filesff
import Home from "../../pages/Home";
import Voluntario from "../../pages/Voluntario/index";
import Opiniao from "../../pages/PesquisaOpiniao/index";
import Comites from "../../pages/Comites/index";

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View>
        <LinearGradient
          start={{ y: 1.0, x: 0.0 }}
          end={{ x: 0.9, y: 1.0 }}
          colors={["#24C0AB", "#EC008C"]}
          style={{
            width: 450,
            paddingStart: Platform.OS === "ios" ? 10 : 10,
            marginTop: Platform.OS === "ios" ? -70 : -60,
            height: 115,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
              {/*Donute Button Image */}
              <Icon
                name="bars"
                style={{
                  color: "#fff",
                  marginStart: 10,
                  marginTop: Platform.OS === "ios" ? 70 : 75,
                }}
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="search"
                style={{
                  color: "#fff",
                  marginTop: Platform.OS === "ios" ? 70 : 75,
                  marginStart: Platform.OS === "ios" ? 320 : 280,
                }}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Cidadania23",
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        textAlign: "center",
        right: Platform.OS === "ios" ? 0 : 30,
      },
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Voluntario,
    navigationOptions: ({ navigation }) => ({
      title: "Seja Voluntário",
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        textAlign: "center",
        right: Platform.OS === "ios" ? 0 : 30,
      },
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Opiniao,
    navigationOptions: ({ navigation }) => ({
      title: "Pesquisa de Opinião",
      headerLeft: (props) => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        textAlign: "center",
        right: Platform.OS === "ios" ? 0 : 30,
      },
    }),
  },
});

const Screen_Comites = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Comites,
    navigationOptions: ({ navigation }) => ({
      title: "Comitês",
      headerLeft: (props) => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      // headerStyle: {
      //   backgroundColor: "transparent",
      // },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        textAlign: "center",
        right: Platform.OS === "ios" ? 0 : 30,
      },
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing

  Home: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: "Home",
    },
  },
  Voluntario: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: "Seja Voluntário",
    },
  },
  Opiniao: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: "Pesquisa de Opinião",
    },
  },

  Comites: {
    //Title
    screen: Screen_Comites,
    navigationOptions: {
      drawerLabel: "Comitês",
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);
