import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const androidHeight = StatusBar.currentHeight;

const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.white};
  padding: ${(props) => props.theme.sizes[1]};
`;
const SearchContainer = styled.View`
  background-color: white;
  padding: ${(props) => props.theme.sizes[1]};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${androidHeight}px;
  ${androidHeight && `margin-top: ${androidHeight}px`};
`;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {},
  search: {},
});
