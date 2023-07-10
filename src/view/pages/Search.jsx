import React, { useState } from "react";
import { API_URLBASE, API_KEY } from "@env";
import {
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
} from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ModalLogoout from "../../assets/components/ModalLogoout";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import stylesSearch from "../../assets/styles/stylesSearch";

const SearchPage = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${API_URLBASE}search/movie?${API_KEY}&query=${searchText}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const clearInput = () => {
    setSearchText("");
    setSearchResults("");
  };

  const onDetails = (id) => {
    navigation.navigate("Details", {
      text: id,
    });
  };
  const ButtonPopular = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={stylesSearch.buttonsMovies}>
        <Text
          style={stylesSearch.textMovies}
          onPress={() => {
            navigation.navigate("Popular");
            clearInput();
          }}
        >
          Popular
        </Text>
      </TouchableOpacity>
    );
  };
  const ButtonFamily = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={stylesSearch.buttonsMovies}>
        <Text
          style={stylesSearch.textMovies}
          onPress={() => {
            navigation.navigate("Family");
            clearInput();
          }}
        >
          Familia
        </Text>
      </TouchableOpacity>
    );
  };
  const ButtonWar = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={stylesSearch.buttonsMovies}>
        <Text
          style={stylesSearch.textMovies}
          onPress={() => {
            navigation.navigate("War");
            clearInput();
          }}
        >
          Guerra
        </Text>
      </TouchableOpacity>
    );
  };
  const ButtonWestern = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={stylesSearch.buttonsMovies}>
        <Text
          style={stylesSearch.textMovies}
          onPress={() => {
            navigation.navigate("Western");
            clearInput();
          }}
        >
          Faroeste
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={stylesSearch.containerSearch}>
      <LinearGradient
        colors={["#000", "#182848", "#000"]}
        style={stylesSearch.background}
      />
      <MaterialIcons
        style={stylesSearch.localMovies}
        name="local-movies"
        size={23}
        color="#fff"
      />
      <View style={stylesSearch.manBottons}>
        <ModalLogoout screenName="Home" />
        <View style={stylesSearch.containerInput}>
          <TextInput
            placeholderTextColor={"white"}
            style={stylesSearch.buttonInput}
            placeholder="Buscar filme"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity
            style={stylesSearch.iconsInput}
            onPress={handleSearch}
          >
            <MaterialIcons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={stylesSearch.manTags}>
          <ButtonPopular />
          <ButtonFamily />
          <ButtonWar />
          <ButtonWestern />
        </View>
      </View>
      <View style={stylesSearch.manPosters}>
        <TouchableOpacity
          style={stylesSearch.buttonPlay}
          onPress={() => {
            navigation.navigate("TrailerPopular");
          }}
        >
          <View style={stylesSearch.iconText}>
            <Text style={stylesSearch.textPlay}>Play</Text>
            <Feather
              style={stylesSearch.iconPlayCircle}
              name="play-circle"
              color="#fff"
              size={17}
            />
          </View>
          <Image
            style={stylesSearch.posters}
            source={{
              uri: `https://www.themoviedb.org/t/p/original/ktU3MIeZtuEVRlMftgp0HMX2WR7.jpg`,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesSearch.buttonPlay}
          onPress={() => {
            navigation.navigate("TrailerFamily");
          }}
        >
          <View style={stylesSearch.iconText}>
            <Text style={stylesSearch.textPlay}>Play</Text>
            <Feather
              style={stylesSearch.iconPlayCircle}
              name="play-circle"
              color="#fff"
              size={17}
            />
          </View>
          <Image
            style={stylesSearch.posters}
            source={{
              uri: `https://www.themoviedb.org/t/p/original/88OGFOcFI04CL4uucb6I7ZzUqD6.jpg`,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesSearch.buttonPlay}
          onPress={() => {
            navigation.navigate("TrailerWar");
          }}
        >
          <View style={stylesSearch.iconText}>
            <Text style={stylesSearch.textPlay}>Play</Text>
            <Feather
              style={stylesSearch.iconPlayCircle}
              name="play-circle"
              color="#fff"
              size={17}
            />
          </View>
          <Image
            style={stylesSearch.posters}
            source={{
              uri: `https://www.themoviedb.org/t/p/original/i1zB2kmcZgV73GPXvVZq4jX770S.jpg`,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesSearch.buttonPlay}
          onPress={() => {
            navigation.navigate("TrailerWestern");
          }}
        >
          <View style={stylesSearch.iconText}>
            <Text style={stylesSearch.textPlay}>Play</Text>
            <Feather
              style={stylesSearch.iconPlayCircle}
              name="play-circle"
              color="#fff"
              size={17}
            />
          </View>
          <Image
            style={stylesSearch.posters}
            source={{
              uri: `https://www.themoviedb.org/t/p/original/rhdrY0b7AftFnA6yaQXWLVHxDag.jpg`,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesSearch.info}>
        <Text style={stylesSearch.textInfo}> Resutados para sua pesquisa</Text>
      </View>

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onDetails(item.id)}
            style={stylesSearch.cardDetails}
          >
            <View style={stylesSearch.cards}>
              <Image
                style={stylesSearch.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}`,
                }}
              />
              <Text numberOfLines={3} style={stylesSearch.overview}>
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
export default SearchPage;
