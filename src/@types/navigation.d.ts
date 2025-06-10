export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      mealDetails: undefined;
      mealFeedback: { type: ONDIET | OFFDIET }; // ajuste o tipo conforme necessário
      stats: undefined;
      [key: string]: object | undefined;
    }
  }
}
