import React from "react";
import { Text, View } from "react-native";
function BookDetails({ navigation, route }) {
  const incomingData = route.params;
  return (
    <View>
      <Text>{incomingData.data.title}</Text>
      <Text>{incomingData.data.subtitle}</Text>
    </View>
  );
}

export { BookDetails };
