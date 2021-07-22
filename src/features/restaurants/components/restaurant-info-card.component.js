import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typo/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Image, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Titles = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Adress = styled(Paragraph)`
  font-size: ${(props) => props.theme.fontSizes.caption}; 
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Eskiköy Lokantası",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg",
    ],
    adress = "Eskiköy mahallesi Ulukışla",
    isOpenNow = true,
    rating = 4.9,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Info>
        <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                 <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </SectionEnd>
          </Section>
          <Adress>{adress}</Adress>
        </Info>
      </Card.Content>
    </Card>
  );
};
