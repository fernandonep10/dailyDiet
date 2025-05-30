import styled, { css } from "styled-components/native";

export const ContainerHeader = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  padding: 40px 0px;
`;

export const mealsLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 10px;
  `}
`;

export const CotainerBody = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  padding: 0px 24px;
`;
