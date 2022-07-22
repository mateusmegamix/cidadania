import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Drawer } from "native-base";
import colors from "../components/commonStyles/colors";
import { LinearGradient } from "expo-linear-gradient";
import Home from "../pages/Home/index";
import SideBar from "./SideBar";

export default props = class MenuDrawer extends Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    const { navigation } = this.props;
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.closeDrawer()}
      >
        <StatusBar hidden={true} />
        <LinearGradient
          start={{ y: 1.0, x: 0.0 }}
          end={{ x: 0.9, y: 1.0 }}
          colors={["#24C0AB", "#EC008C"]}
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            height: Platform.OS === "ios" ? 100 : 80,
            paddingTop: 80,
            width: "100%",
          }}
        >
          <View
            style={{
              marginTop: 0,
              padding: 10,
              height: 100,
              backgroundColor: "transparent",
              justifyContent: "flex-start",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Icon
              onPress={() => this.openDrawer()}
              name="bars"
              size={30}
              color="#FFFFFF"
              style={{ marginStart: 10, width: "10%" }}
            />
            <View
              style={{
                alignItems: "center",
                width: "60%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginStart: 60,
                  color: colors.colors.fundo,
                }}
              >
                Cidadania23
              </Text>
            </View>
            <Icon
              onPress={() => {}}
              name="search"
              size={30}
              color="#FFFFFF"
              style={{
                marginLeft: Platform.OS === "ios" ? "15%" : "15%",
                width: "20%",
              }}
            />
          </View>
        </LinearGradient>

        <View style={styles.container}>
          <Home navigation={this.props.navigation} />
        </View>
      </Drawer>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
