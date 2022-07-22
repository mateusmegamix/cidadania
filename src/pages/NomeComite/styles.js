import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: colors.colors.background,
  },
  txtTitle: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.colors.buttonF,
  },
  txt: {
    marginTop: 25,
    padding: 2,
    fontSize: 14,
    textAlign: "left",
    color: colors.colors.shadow,
  },
  containerLocal: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingEnd: Platform.OS === "ios" ? 40 : 20,
    paddingStart: Platform.OS === "ios" ? 0 : 0,
  },
  icon: {
    color: colors.colors.text,
    marginRight: 20,
  },
  local: {
    color: colors.colors.text,
    marginRight: 10,
  },
});

export default styles;
