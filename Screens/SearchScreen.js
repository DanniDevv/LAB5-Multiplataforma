import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {

    console.log(`Buscando: ${text}`);
  };

  const navigateToMusic = () => {
    navigation.navigate("");
  };

  const gridData = [
    { id: 1, title: "Queen" },
    { id: 2, title: "The Beatles" },
    { id: 3, title: "Led Zeppelin" },
    { id: 4, title: "Pink Floyd" },
    { id: 5, title: "AC/DC" },
    { id: 6, title: "Nirvana" },
    { id: 7, title: "The Rolling Stones" },
    { id: 8, title: "Metallica" },
    { id: 9, title: "U2" },
    { id: 1, title: "Queen" },
    { id: 2, title: "The Beatles" },
    { id: 3, title: "Led Zeppelin" },
    { id: 4, title: "Pink Floyd" },
    { id: 5, title: "AC/DC" },
    { id: 6, title: "Nirvana" },
    { id: 7, title: "The Rolling Stones" },
    { id: 8, title: "Metallica" },
    { id: 9, title: "U2" },
  ];

  const renderGridItem = ({ item }) => (
    <TouchableOpacity style={styles.gridItem} onPress={navigateToMusic}>
      <Ionicons name="musical-notes" size={64} color="#282828" />
      <Text style={styles.gridItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          onSubmitEditing={() => handleSearch(searchText)}
        />
      </View>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {gridData.map((item) => (
          <View key={item.id} style={styles.gridItemContainer}>
            {renderGridItem({ item })}
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top:'5%',
  },
  searchBar: {
    width: "80%", 
    padding: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "royalblue",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 25,
    color: "royalblue",
    textAlign: "center",
    borderColor: "royalblue",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  gridItemContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  gridItem: {
    backgroundColor: "royalblue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    margin: 10,
  },
  gridItemText: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});
