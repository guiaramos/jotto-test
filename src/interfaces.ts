export interface IPropsCongrats {
  success: boolean;
}
export interface IPropsGuessedWords {
  guessedWords: {
    guessedWord: string;
    letterMatchCount: number;
  }[];
}
