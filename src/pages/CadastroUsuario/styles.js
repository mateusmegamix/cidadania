import { StyleSheet, Platform } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colors.background,
  },
  containerLogo: {
    paddingTop: "18%",
    width: "100%",
  },
  textTitle: {
    color: colors.colors.title,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
  },
  textSub: {
    textAlign: "center",
    marginTop: 10,
    color: colors.colors.text,
  },
  text: {
    textAlign: "center",
    marginStart: 1,
    color: colors.colors.text,
  },
  dadosIniciais: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colors.select,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
  },
  containerIcon: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 20,
    paddingStart: -100,
    marginEnd: Platform.OS === "ios" ? 80 : 40,
  },
  borderIcon: {
    textAlign: "center",
    color: colors.colors.fundo,
    fontWeight: "bold",
  },
  textIcon: {
    color: colors.colors.select,
    fontWeight: "bold",
  },
  containerInput: {
    flexDirection: "column",
    width: "90%",
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    paddingLeft: 20,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: colors.colors.fundo,
  },
  containerTermos: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 15,
    paddingRight: 125,
  },
  checkbox: {
    bottom: 0,
    borderColor: "black",
    width: 15,
    height: 15,
    marginRight: Platform.OS === "ios" ? 5 : 20,
  },
  buttonEnviar: {
    width: "90%",
    marginTop: 10,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.colors.button,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFacebook: {
    flexDirection: "row",
    width: "90%",
    marginTop: 15,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.colors.buttonF,
    justifyContent: "center",
    alignItems: "center",
  },
  icoFacebook: {
    marginRight: 20,
    color: colors.colors.fundo,
    fontSize: 14,
  },
  textButton: {
    color: colors.colors.fundo,
    fontWeight: "bold",
  },
});

export default styles;
