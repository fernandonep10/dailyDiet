import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 15px;
  position: relative;
  top: -15px;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const StatsLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;
