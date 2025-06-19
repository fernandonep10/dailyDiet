import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  border-radius: 12px;
  width: 80%;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    text-align: center;
    margin-bottom: 24px;
  `};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const CancelButton = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 6px;
  padding: 10px 20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 6px;
  padding: 10px 20px;
`;

export const CancelText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const ConfirmText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
