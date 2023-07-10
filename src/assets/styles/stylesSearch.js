import { StyleSheet } from "react-native";

const stylesSearch = StyleSheet.create({
  containerSearch: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 300,
    top: 300,
  },
  containerInput: {
    flexDirection: "row",
    width: "90%",
    height: 40,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#5b86e5",
    paddingHorizontal: 20,
  },
  iconsInput: {
    padding: 8,
    marginBottom: "155%",
    width: "10%",
    height: 35,
    backgroundColor: "transparent",
    textAlign: "center",
  },
  buttonInput: {
    width: "90%",
    height: 50,
    fontSize: 18,
    color: "#d2d1d192",
    alignSelf: "center",
    backgroundColor: "transparent",
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
    boxShadow: "#5b86e4 1px 1px 10px 1px",
  },
  manBottons: {
    marginTop: 2,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: "#5b86e5",
    boxShadow: "#5b86e5 1px 1px 10px 1px",
  },
  overview: {
    opacity: 0.5,
    width: "95%",
    color: "#fff",
    fontSize: 16,
    textAlignVertical: "center",
    marginTop: 10,
  },
  cardDetails: {
    flex: 1,
    marginVertical: 5,
    height: 80,
  },
  manTags: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  localMovies: {
    position: "absolute",
    marginTop: 31,
    marginLeft: "88%",
  },
  manPosters: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    marginTop: 10,
    gap: 5,
  },
  posters: {
    width: 80,
    height: 80,
  },
  buttonPlay: {
    flexDirection: "column-reverse",
  },
  textPlay: {
    size: 17,
    color: "#fff",
  },
  iconText: {
    borderWidth: 1,
    borderColor: "#5b86e5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  iconPlayCircle: {
    marginTop: "auto",
  },
  textInfo: {
    size: 30,
    color: "#fff",
  },
  info: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonsMovies: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    marginTop: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
  },
  textMovies: {
    color: "#fff",
  },
});
export default stylesSearch;
