import styled, { css } from "styled-components/native";
import { Text } from "react-native";

import { feedbackStyleProps } from "@type/style";

export const Container = styled.View`
  flex: 1;
  padding: 40px 24px;
`;

export const feedbackContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)<feedbackStyleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "ONDIET"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    text-align: center;
    margin-top: 8px;
  `}
`;

export const Illustration = styled.Image`
  width: 288px;
  height: 385px;
  margin-top: 40px;
`;
