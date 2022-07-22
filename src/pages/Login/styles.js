import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colors.secundary,
  },
  imgLogo: {
    width: 250,
    height: 250,
    borderRadius: 200 / 2,
  },
  textTitle: {
    fontSize: 25,
    marginTop: 20,
    color: colors.colors.fundo,
  },
  textSubTitulo: {
    marginTop: 5,
    color: colors.colors.fundo,
  },
  containerInput: {
    marginTop: 10,
    width: "90%",
  },
  input: {
    marginTop: 10,
    height: 40,
    paddingLeft: 20,
    borderRadius: 8,
    backgroundColor: colors.colors.fundo,
  },
  buttonEntrar: {
    width: "90%",
    marginTop: 20,
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
  txtEsq: {
    marginTop: 15,
    fontWeight: "bold",
    color: colors.colors.fundo,
  },
  txtCad: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    fontWeight: "bold",
    color: colors.colors.fundo,
  },
});
export default styles;
