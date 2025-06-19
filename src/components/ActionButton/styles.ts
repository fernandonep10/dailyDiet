import styled, { css } from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

type actionButtonProps = {
  color: string;
};

export const actionButton = styled(TouchableOpacity)<actionButtonProps>`
  width: 100%;
  background-color: ${({ theme, color }) =>
    color === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border: 1px;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const actionButtonText = styled(Text)<actionButtonProps>`
  ${({ theme, color }) => css`
    color: ${color === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
