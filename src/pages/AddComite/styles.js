import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingStart: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    marginRight: 10,
    marginTop: 20,
    height: 50,
    paddingLeft: 20,
    borderRadius: 8,
    borderColor: colors.colors.shadow,
    borderWidth: 1,
    backgroundColor: colors.colors.fundo,
  },
  containerStyle: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    paddingEnd: 10,
    marginStart: -10,
  },
  conteudo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.colors.fundo,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.colors.shadow,
    height: 50,
    marginRight: 10,
    width: "50%",
  },
  inputStyle: {
    paddingLeft: 20,
  },
  icon: {
    paddingRight: 10,
    color: colors.colors.text,
  },
  inputMulti: {
    width: "100%",
    textAlignVertical: "top",
    paddingTop: 10,
    marginRight: 10,
    marginTop: 20,
    height: 150,
    paddingLeft: 20,
    borderRadius: 8,
    borderColor: colors.colors.shadow,
    borderWidth: 1,
    backgroundColor: colors.colors.fundo,
  },
  button: {
    width: "100%",
    paddingEnd: 10,
    marginStart: -10,
    marginTop: 35,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.colors.button,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    color: colors.colors.fundo,
    fontWeight: "bold",
  },
});

export default styles;
