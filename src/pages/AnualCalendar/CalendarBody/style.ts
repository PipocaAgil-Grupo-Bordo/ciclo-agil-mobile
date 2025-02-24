import { ColorScheme, FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 5,
    elevation: 0,
    marginHorizontal: 10,
    padding: 10,
    width: 100
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "100%"
  },
  buttonNo: {
    backgroundColor: "transparent",
    borderWidth: 0
  },
  buttonYes: {
    backgroundColor: "#8E37C9"
  },
  calendar: {
    backgroundColor: "transparent",
    margin: "auto",
    padding: 0
  },
  centeredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  container: {
    backgroundColor: "transparent",
    flex: 1,
    margin: 0,
    padding: 0,
    width: "100%"
  },
  containerHeader: {
    margin: "auto"
  },
  modalText: {
    fontFamily: FontScheme.family.primary,
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center"
  },
  modalTextAlert: {
    fontFamily: FontScheme.family.secondary,
    fontSize: 24,
    height: "auto",
    paddingBottom: 10,
    textAlign: "center",
    width: "100%"
  },
  modalView: {
    alignItems: "center",
    backgroundColor: `${Palette.neutralWhite[50]}`,
    borderRadius: 20,
    elevation: 5,
    height: 270,
    margin: 20,
    padding: 35,
    shadowColor: `${Palette.neutralBlack[700]}`,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 345
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  },
  textNo: {
    color: ColorScheme.text.primary,
    fontFamily: FontScheme.family.primary,
    fontSize: 16
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
