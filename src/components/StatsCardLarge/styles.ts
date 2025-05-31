import styled, { css } from "styled-components/native";
import { StatsCardProps } from "./types";
import { View } from "react-native";

export const Container = styled(View)<StatsCardProps>`
  background-color: ${({ color }) => color};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
