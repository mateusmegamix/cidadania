import { StyleSheet, Platform } from "react-native";
import colors from "../commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9F2",
    padding: 20,
  },
  buttonFiltro: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colors.fundo,
    height: 40,
    margin: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
  },

  containerBtnFiltro: {
    flexDirection: "row",
    marginTop: 5,
  },
  textButton: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
    margin: Platform.OS === "ios" ? 1 : -3,
  },
  //teste========================
  buttonFiltoSelect: {
    backgroundColor: colors.colors.buttonF,
  },
  textButtonF: {
    color: colors.colors.fundo,
  },
  //teste========================
  containerCard: {
    marginTop: 40,
    borderRadius: 20,
  },
  image: {
    width: 380,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  category: {
    marginTop: 20,
    paddingStart: 20,
    fontSize: 16,
    color: colors.colors.button,
  },
  txtTitle: {
    marginTop: 10,
    marginRight: 20,
    paddingStart: 20,
    fontSize: 14,
    textAlign: "left",
    fontWeight: "bold",
  },
  txtDescription: {
    marginTop: 20,
    marginRight: 20,
    paddingStart: 20,
    textAlign: "left",
    color: colors.colors.text,
  },
  txtTime: {
    marginTop: 20,
    paddingStart: 20,
    textAlign: "left",
  },
  containerFiltro: {
    width: "100%",
    paddingEnd: 10,
  },
  txtFiltro: {
    fontSize: 20,
  },
  input: {
    width: "50%",
    marginTop: 10,
    marginRight: 10,
    height: 50,
    paddingLeft: 20,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: colors.colors.fundo,
  },
  containerAgenda: {
    flexDirection: "row",
    height: 120,
    borderRadius: 20,
    marginTop: 25,
    width: "100%",
  },
  btnTime: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colors.button,
    width: "25%",
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  txtDay: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.colors.fundo,
  },
  txtMounth: {
    fontSize: 20,
    marginTop: -5,
    fontWeight: "bold",
    color: colors.colors.fundo,
  },
  txtHour: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.colors.fundo,
  },
  btnEvent: {
    justifyContent: "center",
    backgroundColor: colors.colors.fundo,
    width: "75%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  txtEvent: {
    paddingStart: 15,
    marginEnd: 3,
    textAlign: "left",
    fontWeight: "bold",
  },
  txtRegiao: {
    marginTop: 15,
    paddingStart: 15,
    textAlign: "left",
  },
});

export default styles;
