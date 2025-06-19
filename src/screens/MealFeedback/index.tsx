import * as S from "./styles";
import man from "@assets/man.png";
import woman from "@assets/woman.png";
import ActionButton from "@components/ActionButton";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { StatusBar, View } from "react-native";

type MealFeedbackRouteProp = RouteProp<
  ReactNavigation.RootParamList,
  "mealFeedback"
>;

export default function MealFeedback() {
  const route = useRoute<MealFeedbackRouteProp>();
  const { type } = route.params;

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <View style={{ backgroundColor: theme.COLORS.GRAY_6, flex: 1 }}>
      <StatusBar
        backgroundColor={theme.COLORS.GRAY_6} // cor desejada
        barStyle="light-content" // ou "dark-content" conforme contraste
      />

      <S.Container>
        <S.feedbackContainer>
          <S.Title type={type}>
            {type === "ONDIET" ? "Continue assim!" : "Que pena!"}
          </S.Title>
          <S.SubTitle>
            {type === "ONDIET"
              ? "Você continua dentro da dieta. Muito bem!"
              : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
          </S.SubTitle>
          {type === "ONDIET" ? (
            <S.Illustration source={woman} />
          ) : (
            <S.Illustration source={man} />
          )}
        </S.feedbackContainer>

        <ActionButton
          title="Ir para página Inicial"
          onPress={handleGoHome}
          color="PRIMARY"
        />
      </S.Container>
    </View>
  );
}
