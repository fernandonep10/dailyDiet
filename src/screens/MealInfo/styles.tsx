import styled, { css } from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Circle } from "phosphor-react-native";

type MealDataProps = {
  type: "ONDIET" | "OFFDIET" | undefined;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 15px;
  position: relative;
  top: -15px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const MealLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    margin-top: 24px;
  `};
`;

export const MealInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-top: 24px;
  `};
`;

export const DateAndTimeLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-top: 24px;
  `};
`;

export const MealClassContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
    margin-top: 24px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    align-self: flex-start;
    flex-direction: row;
  `};
`;

export const MealClassInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const Class = styled(Circle).attrs<MealDataProps>(({ theme, type }) => ({
  color: type === "OFFDIET" ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
  size: 12,
  weight: "fill",
}))`
  margin-right: 11px;
`;
