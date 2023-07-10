import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { getListPopular } from "../../assets/api/api";
import { ButtonFamily } from "../../assets/components/ButtonsView";
import { ButtonPopular } from "../../assets/components/ButtonsView";
import { ButtonWar } from "../../assets/components/ButtonsView";
import { ButtonWestern } from "../../assets/components/ButtonsView";
import ButtonSearch from "../../assets/components/ButtonSearch";
import ModalLogoout from "../../assets/components/ModalLogoout";
import { MaterialIcons } from "@expo/vector-icons";
import stylesMovies from "../../assets/styles/stylesMovies";

export default function Popularmovies({ navigation }) {
  const [moviesList, setMoviesList] = useState([]);

  const onDetails = (id) => {
    navigation.navigate("Details", {
      text: id,
    });
  };

  useEffect(() => {
    getListPopular(setMoviesList);
  }, []);

  return (
    <View style={stylesMovies.container}>
      <MaterialIcons
        style={stylesMovies.localMovies}
        name="local-movies"
        size={23}
        color="#fff"
      />
      <View style={stylesMovies.manBottons}>
        <ModalLogoout screenName="Home" />
        <View style={stylesMovies.buttonsMovies}>
          <ButtonPopular screenName="Popular" />
          <ButtonFamily screenName="Family" />
          <ButtonSearch screenName="Search" />
          <ButtonWar screenName="War" />
          <ButtonWestern screenName="Western" />
        </View>
      </View>
      <FlatList
        data={moviesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onDetails(item.id)}
            style={stylesMovies.cardDetails}
          >
            <View style={stylesMovies.cards}>
              <Image
                style={stylesMovies.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
              />
              <Text numberOfLines={3} style={stylesMovies.overview}>
                {item.overview}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="dark" />
    </View>
  );
};
