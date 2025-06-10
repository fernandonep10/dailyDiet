import * as S from "./styles";
import man from "@assets/man.png";
import woman from "@assets/woman.png";
import ActionButton from "@components/ActionButton";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

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

      <ActionButton title="Ir para página Inicial" onPress={handleGoHome} />
    </S.Container>
  );
}
