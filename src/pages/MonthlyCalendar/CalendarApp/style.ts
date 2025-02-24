import { StyleSheet } from "react-native";

import { ColorScheme, FontScheme } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 45
  },
  containerHeader: {
    margin: "auto"
  },
  calendar: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 0,
    marginTop: 20,
    padding: 0,
    width: "100%"
  },
  selected: {
    color: "#000",
    fontSize: 16,
    marginTop: 42
  },
  // Estilos do Modal
  centeredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 22
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
  modalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    height: 270,
    margin: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 345
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "100%"
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
    elevation: 0,
    marginHorizontal: 10,
    padding: 10,
    width: 100
  },
  buttonNo: {
    backgroundColor: "transparent",
    borderWidth: 0
  },
  buttonYes: {
    backgroundColor: "#8E37C9"
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
  },
  modalTextAlert: {
    fontFamily: FontScheme.family.secondary,
    fontSize: 24,
    height: "auto",
    paddingBottom: 10,
    textAlign: "center",
    width: "100%"
  },
  modalText: {
    fontFamily: FontScheme.family.primary,
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center"
  }
});
