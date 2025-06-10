import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { onOffDietPropsOptions } from "./types";
import { getDietColors } from "@utils/index";

export const OnOffDietContainer = styled(
  TouchableOpacity
)<onOffDietPropsOptions>`
  ${({ theme, dietType, label }) => {
    const { backgroundColor, borderColor } = getDietColors(dietType, label);

    return css`
      background-color: ${backgroundColor};
      border: 1px;
      border-color: ${borderColor};
      min-height: 50px;
      max-height: 50px;
      border-radius: 6px;
      width: 50%;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

export const OnOffDietLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
