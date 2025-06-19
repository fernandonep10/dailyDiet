import styled, { css } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";
import { ScoreBoardStats } from "@type/data";

export type scoreBoardTypeStyleProps = "statsIsOn" | "statsIsOff";

type scoreBoardProps = {
  type: scoreBoardTypeStyleProps;
  stats: ScoreBoardStats;
};

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerLogoProfile = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 10px 24px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 40px;
`;

export const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
`;

export const scoreBoardContainer = styled(View)<scoreBoardProps>`
  ${({ type, theme, stats }) => css`
    width: "100%";
    margin: ${type === "statsIsOn" ? "0" : "33px 24px"};
    background-color: ${stats.situation === "ONDIET"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
    height: ${type === "statsIsOn" ? "160px" : "102px"};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
  `}
`;

export const scoreBoard = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const scoreBoardSub = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const goToScoreButton = styled(TouchableOpacity)`
  flex: 1;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const goToScoreIcon = styled(ArrowUpRight).attrs(({ theme, color }) => ({
  size: 32,
  color: color === "ONDIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const goHomeButton = styled(TouchableOpacity)`
  flex: 1;
  position: absolute;
  top: 35px;
  left: 24px;
`;

export const goHomeIcon = styled(ArrowLeft).attrs(({ theme, color }) => ({
  size: 32,
  color: color === "ONDIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
