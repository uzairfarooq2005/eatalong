import React from "react";
import { FlatList, View, TouchableOpacity, Text } from "react-native";
const booksData = [
  { title: "my book 1", subtitle: "subtitle 1" },
  { title: "my book 2", subtitle: "subtitle 2" },
  { title: "my book 3", subtitle: "subtitle 3" },
  { title: "my book 4", subtitle: "subtitle 4" },
];
function Books({ navigation }) {
  const __renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 20, margin: 10, backgroundColor: "pink" }}
      onPress={() => navigation.navigate("bookDetails", { data: item })}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.title}</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return <FlatList data={booksData} renderItem={__renderItem} />;
}

export { Books };
