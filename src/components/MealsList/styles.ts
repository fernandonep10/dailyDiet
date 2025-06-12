import { SectionList } from "react-native";
import styled, { css } from "styled-components/native";
import { MealCardPropsData } from "@components/MealCard/types";
import { MealListSectionsPropsData } from "@components/MealsList/types";

export const List = styled(
  SectionList<MealCardPropsData, MealListSectionsPropsData>
).attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 50, // aqui funciona!
  },
}))``;

export const HeaderList = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    padding-top: 32px;
  `}
`;
