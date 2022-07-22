import { StyleSheet, Platform } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colors.background,
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
});

export default styles;
