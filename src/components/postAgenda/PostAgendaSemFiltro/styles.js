import { StyleSheet } from "react-native";
import colors from "../../../components/commonStyles/colors";

const styles = StyleSheet.create({
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
