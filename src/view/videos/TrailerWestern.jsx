import React, { useState, useCallback } from "react";
import { View, useWindowDimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonTrailer } from "../../assets/components/ButtonTrailer";
import stylesTreiler from "../../assets/styles/stylesTreiler";

export default function TrailerWestern() {
  const [playing, setPlaying] = useState(false);
  const { width } = useWindowDimensions();

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={stylesTreiler.containerTrailer}>
      <LinearGradient
        colors={["#000", "#5b86e5", "#000"]}
        style={stylesTreiler.background}
      >
        <View>
          <YoutubePlayer
            height={300}
            width={width}
            play={playing}
            videoId={"8ZcT9OGsmFA"}
            onChangeState={onStateChange}
          />
        </View>
        <View
          style={[
            stylesTreiler.manTagTrailer,
            { zIndex: 1, position: "absolute" },
          ]}
        >
          <ButtonTrailer screenName="Search" />
        </View>
      </LinearGradient>
    </View>
  );
};
