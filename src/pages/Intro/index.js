import React from "react";
import colors from "../../components/commonStyles/colors";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import logo from "../../assets/logo.png";

const { width, height } = Dimensions.get("window");
const slides = [
  {
    key: 1,
    title: "Faça parte da Cidadania",
    text: "Faça seu cadastro e fique por dentro das \nprincipais informações.",
    image: require("../../assets/splash/slide1.png"),
  },
  {
    key: 2,
    title: "Sua interação vale pontos!",
    text:
      "Preencher seus dados, compartilhar \nconteúdos e responder pesquisas valem \npontos.",
    image: require("../../assets/splash/slide2.png"),
  },
  {
    key: 3,
    title: "Se informe!",
    text:
      "Aqui você encontra conteúdos e se antecipa\n sobre nossas informações.",
    image: require("../../assets/splash/slide3.png"),
  },
];

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }

  _onDone = () => {
    this.props.navigation.navigate("Login");
    this.setState({ showRealApp: true });
  };

  _renderNextButton = () => {
    return (
      <View>
        <Text style={{ color: "#FFFFFF", margin: 10, fontWeight: "bold" }}>
          Próximo
        </Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View>
        <Text style={{ color: "#FFFFFF", margin: 10, fontWeight: "bold" }}>
          Começar
        </Text>
      </View>
    );
  };

  _renderSkipButton = () => {
    return (
      <View>
        <Text style={{ color: "#FFFFFF", margin: 10, fontWeight: "bold" }}>
          Pular
        </Text>
      </View>
    );
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.safe}>
        <StatusBar hidden={true} />
        <ImageBackground source={item.image} style={styles.containerBackground}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 300,
            }}
          >
            <Text style={styles.txtTitle}>{item.title}</Text>
            <Text style={styles.txt}>{item.text}</Text>
            {/* <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.txtButton}>Próximo</Text>
          </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    );
  };

  render() {
    if (this.state.showRealApp) {
      return <Intro />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          onDone={this._onDone}
          data={slides}
          showSkipButton={true}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderSkipButton={this._renderSkipButton}
          activeDotStyle={{ backgroundColor: colors.colors.select }}
          dotStyle={{ backgroundColor: "#CCCCCC" }}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  containerBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    color: colors.colors.intro,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center",
  },
  txt: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: colors.colors.fundo,
  },
  button: {
    width: "90%",
    marginTop: 80,
    height: 45,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.colors.fundo,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  txtButton: {
    color: colors.colors.fundo,
    fontWeight: "bold",
  },
});
