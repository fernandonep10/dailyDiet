import styled, { css } from "styled-components/native";
import { HeaderBasicStyleContainerProps } from "./types";
import { View, TouchableOpacity, Text } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(View)<HeaderBasicStyleContainerProps>`
  ${({ color }) =>
    css`
      background-color: ${color};
      width: 100%;
      height: 132px;
      align-items: center;
      justify-content: center;
    `};
`;

export const goBack = styled(TouchableOpacity)`
  flex: 1;
  position: absolute;
  top: 49px;
  left: 24px;
`;

export const goBackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_2,
}))``;

export const Label = styled.Text`
  ${({ theme }) =>
    css`
      color: ${theme.COLORS.GRAY_1};
      font-size: ${theme.FONT_SIZE.LG}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;
