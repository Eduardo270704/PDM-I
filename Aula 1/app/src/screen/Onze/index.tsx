import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./styles";
import React from "react";
import { ButtonRow } from "../../components";
import { fatec } from "../../assets";

export default function Onze() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={fatec} style={styles.fatec} />
        <Text style={styles.title}>HOME</Text>
        <ButtonRow children={"Um"} children2={"Dois"}></ButtonRow>
        <ButtonRow children={"Três"} children2={"Quadro"}></ButtonRow>
        <ButtonRow children={"Cinco"} children2={"Seis"}></ButtonRow>
        <ButtonRow children={"Sete"} children2={"Oito"}></ButtonRow>
        <ButtonRow children={"Nove"} children2={"Dez"}></ButtonRow>
      </View>
    </SafeAreaView>
  );
}
