import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import MealDetails from "@screens/MealDetails";
import MealFeedback from "@screens/MealFeedback";
import Stats from "@screens/Stats";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="mealFeedback" component={MealFeedback} />
    </Navigator>
  );
}
