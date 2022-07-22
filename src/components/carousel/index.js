import React, { Component } from "react";
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import mascara from "../../assets/mascara.png";
import styles from "./styles";
let ScreenHeight = Dimensions.get("window").height;

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      auterScrollEnable: true,
    };
  }

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: ScreenHeight,
            justifyContent: "center",
            alignItems: "center",
            maxHeight: 260,
          }}
        >
          <Swiper
            dotColor="#C3C3C3"
            activeDotColor="#E0007A"
            autoplay={true}
            autoplayDirection={true}
            autoplayTimeout={5.0}
            showsButtons={false}
            style={{ backgroundColor: "" }}
          >
            <View style={[styles.slideContainer, styles.slide1]}>
              <Image source={mascara} style={styles.imagens} />
            </View>
            <View style={[styles.slideContainer, styles.slide2]}>
              <Image source={mascara} style={styles.imagens} />
            </View>
            <View style={[styles.slideContainer, styles.slide3]}>
              <Image source={mascara} style={styles.imagens} />
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}
