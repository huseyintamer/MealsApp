import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";


export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Eskiköy Lokantası",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg",
    ],
    adress = "Eskiköy mahallesi Ulukışla",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{adress}</Paragraph>
      </Card.Content>
    </Card>
  );
};
