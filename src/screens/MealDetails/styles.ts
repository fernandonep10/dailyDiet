import styled, { css } from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 15px;
  position: relative;
  top: -15px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 30px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-top: 24px;
  `};
`;

export const NameInput = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px;
    border-color: ${theme.COLORS.GRAY_5};
    min-height: 60px;
    max-height: 60px;
    border-radius: 6px;
    width: 100%;
  `};
`;

export const DescriptionInput = styled(TextInput).attrs({
  multiline: true,
  textAlignVertical: "top",
})`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px;
    border-color: ${theme.COLORS.GRAY_5};
    min-height: 120px;
    max-height: 120px;
    border-radius: 6px;
  `};
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  padding-right: 12px;
`;

export const DateTimeInput = styled(TextInputMask).attrs({})`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px;
    border-color: ${theme.COLORS.GRAY_5};
    min-height: 50px;
    max-height: 50px;
    border-radius: 6px;
    width: 100%;
  `};
`;
