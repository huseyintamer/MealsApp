import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
const androidHeight = StatusBar.currentHeight;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: androidHeight,
  },
  search: { backgroundColor: "white", padding: 16 },
  list: { flex: 1, backgroundColor: "#f8f8f8", padding: 16 },
});
