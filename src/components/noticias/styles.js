import { StyleSheet, Platform } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9F2",
    marginTop: 0,
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
  containerButton: {
    flexDirection: "row",
  },
  button: {
    width: Platform.OS === "ios" ? 190 : 165,
    height: 60,
    backgroundColor: colors.colors.select,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: Platform.OS === "ios" ? 190 : 165,
    height: 60,
    backgroundColor: colors.colors.fundo,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBtnFiltro: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: -20

  },
  textButton: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
    margin: Platform.OS === "ios" ? 1 : -3,
  },

  containerCard: {
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
});

export default styles;
