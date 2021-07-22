import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const androidHeight = StatusBar.currentHeight;

const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.white};
  padding: ${(props) => props.theme.space[3]};
`;
const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.white};
  padding: ${(props) => props.theme.space[3]};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${androidHeight && `margin-top: ${androidHeight}px`};
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
      <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
   
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
      {/* <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer> */}
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {},
  search: {},
});
