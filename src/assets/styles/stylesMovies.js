import { StyleSheet } from "react-native";

const stylesMovies = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#000",
  },
  cardDetails: {
    flex: 1,
    marginVertical: 5,
    height: 80,
  },

  buttonText: {
    color: "#fff",
  },
  cards: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: 4,
    padding: 5,
    height: 80,
  },
  image: {
    width: "95%",
    height: 180,
    boxShadow: "#5b86e5 1px 1px 10px 1px",
  },
  manBottons: {
    marginTop: 2,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: "#5b86e5",
    boxShadow: "#5b86e5 1px 1px 10px 1px",
  },
  overview: {
    opacity: 0.8,
    width: "95%",
    color: "#fff",
    fontSize: 16,
    textAlignVertical: "center",
    marginTop: 10,
  },
  buttonsMovies: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
  },
  localMovies: {
    position: "absolute",
    marginTop: 31,
    marginLeft: "88%",
  },
});
export default stylesMovies;
