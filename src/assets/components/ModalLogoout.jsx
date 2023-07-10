import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Modal, Text, Pressable, View } from "react-native";
import stylesModal from "../styles/stylesModal";

const ModalLogoout = ({ screenName }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onModal = () => {
    navigation.navigate("Home", {});
  };

  return (
    <View style={stylesModal.containerModal}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={stylesModal.containerButtons}>
          <Pressable
            style={stylesModal.buttonLogout}
            title={`${screenName}`}
            onPress={() => onModal(screenName)}
          >
            <SimpleLineIcons name="logout" size={19} color="#fff" />
            <Text style={stylesModal.textLogoout}>Logo out</Text>
          </Pressable>

          <Pressable
            style={stylesModal.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <FontAwesome name="close" size={19} color="#fff" />
            <Text style={stylesModal.textClose}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable
        style={stylesModal.buttonMenu}
        onPress={() => setModalVisible(true)}
      >
        <Entypo style={stylesModal.icomMenu} name="menu" size={28} />
      </Pressable>
    </View>
  );
};

export default ModalLogoout;
