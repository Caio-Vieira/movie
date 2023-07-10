import { StyleSheet } from "react-native";

const stylesModal = StyleSheet.create({
  containerModal: {
    width: "10%",
    marginTop: 8,
  },
  containerButtons: {
    marginTop: 5,
    width: "40%",
    backgroundColor: "#000",
    padding: 3,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonMenu: {
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  icomMenu: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
    marginBottom: 3,
  },
  buttonLogout: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
  },

  textLogoout: {
    flexDirection: "row",
    color: "#fff",
    marginLeft: 15,
  },
  buttonClose: {
    flexDirection: "row",
    gap: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
    width: 70,
  },
  textClose: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
export default stylesModal;
