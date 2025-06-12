import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";
import { MealCardStyleitemProps } from "./types";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 6px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  margin-top: 8px;
  align-items: center;
  flex-direction: row;
`;

export const TimeLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    padding-left: 11px;
  `}
`;

export const Separator = styled.View`
  width: 2px;
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin-left: 10px;
`;

export const MealLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    padding-left: 11px;
    flex: 1;
  `}
`;

export const Class = styled(Circle).attrs<MealCardStyleitemProps>(
  ({ theme, type }) => ({
    color: type === "OFFDIET" ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID,
    size: 24,
    weight: "fill",
  })
)`
  margin-right: 11px;
`;
