export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      mealDetails: { id?: string; date?: string };
      mealFeedback: { type: ONDIET | OFFDIET }; // ajuste o tipo conforme necessário
      stats: undefined;
      [key: string]: object | undefined;
    }
  }
}
