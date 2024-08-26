import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { ButtonRow } from "../../components";

export default function Onze() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>CADASTRO</Text>
        <ButtonRow children={"Um"} children2={"Dois"}></ButtonRow>
      </View>
    </SafeAreaView>
  );
}
