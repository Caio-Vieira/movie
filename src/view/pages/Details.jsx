import { API_KEY } from "@env";
import { useNavigation, CommonActions } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { getDetails } from "../../assets/api/api";
import stylesDetails from "../../assets/styles/stylesDetails";

export default function Details({ route }) {
  const navigation = useNavigation();
  const [value, setValue] = useState(route.params.text);
  const [details, setDetails] = useState([]);

  async function openDetails() {
    var result = await getDetails.get(`${value}?${API_KEY}&language=pt-BR`);
    console.log(result.data);
    setDetails(result.data);
  }

  useEffect(() => {
    openDetails();
  }, []);

  return (
    <View style={stylesDetails.container}>
      <ImageBackground
        style={stylesDetails.Image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
        }}
      ></ImageBackground>
      <View style={stylesDetails.cardDetails}>
        <Text style={stylesDetails.title}>{details.title}</Text>
        <Text style={stylesDetails.titleSinopse}>Sinopse</Text>
        <Text
          numberOfLines={6}
          style={[stylesDetails.textOverview, { width: 300 }]}
        >
          {details.overview}
        </Text>
        <Text style={stylesDetails.titleNota}>Nota</Text>
        <Text style={stylesDetails.text}>{details.vote_average}</Text>
        <Text style={stylesDetails.releaseTitle}>Data de lançamento</Text>
        <Text style={stylesDetails.text}>{details.release_date}</Text>
      </View>
      <View style={stylesDetails.buttonback}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        >
          <Entypo name="back" size={26} color="#fff" />
          <Text style={stylesDetails.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};
