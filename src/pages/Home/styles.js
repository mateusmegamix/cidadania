import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9F2",
    padding: 20,
  },

  containerButton: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: Platform.OS === "ios" ? 190 : 165,
    height: 60,

    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginStart: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: Platform.OS === "ios" ? 190 : 165,
    height: 60,
    backgroundColor: colors.colors.select,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

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
  TouchacleOpacityStyles: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    bottom: 10,
    borderRadius: 30,
  },
  iconButton: {
    width: 80,
    height: 80,
  },
  modal: {
    flex: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: Platform.OS === "ios" ? "70%" : "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colors.buttonF,
  },
  text: {
    color: colors.colors.fundo,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  TouchacleOpacityStyles: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    bottom: 10,
    borderRadius: 30,
  },
  iconButton: {
    width: 80,
    height: 80,
  },
  btn: {
    marginRight: 10,
    width: Platform.OS === "ios" ? 180 : 150,
    height: Platform.OS === "ios" ? 180 : 150,
    borderRadius: 30,
    backgroundColor: "#48487A",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBtnFiltro: {
    flexDirection: "row",
    marginTop: 30,
  },
  textButton: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
    margin: Platform.OS === "ios" ? 1 : -3,
  },

  buttonFiltoSelect: {
    backgroundColor: colors.colors.buttonF,
  },
  textButtonF: {
    color: colors.colors.fundo,
  },

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
    marginTop: 15,
    paddingEnd: 10,
  },
  txtFiltro: {
    fontSize: 16,
    color: colors.colors.text,
    marginStart: 5,
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
});

export default styles;
