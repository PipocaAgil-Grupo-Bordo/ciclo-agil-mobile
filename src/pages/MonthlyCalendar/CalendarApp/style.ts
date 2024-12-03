import { StyleSheet } from "react-native";
import { ColorScheme, FontScheme } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 45
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  calendar: {
    backgroundColor: "#fff",
    padding: 0,
    marginBottom: 0,
    marginTop: 20,
    width: "100%",
    borderRadius: 16
  },
  selected: {
    color: "#000",
    fontSize: 16,
    marginTop: 42
  },
  // Estilos do Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  overlay: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  modalView: {
    width: 345,
    height: 270,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 0,
    width: 100,
    alignItems: "center",
    marginHorizontal: 10
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
    fontSize: 16,
    fontFamily: FontScheme.family.primary
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTextAlert: {
    width: "100%",
    height: "auto",
    fontSize: 24,
    fontFamily: FontScheme.family.secondary,
    textAlign: "center",
    paddingBottom: 10
  },
  modalText: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: FontScheme.family.primary
  }
});
