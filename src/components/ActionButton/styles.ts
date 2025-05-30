import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const actionButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const actionButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
