import { WordState } from "./Types";

export const wordToState = (word: string): WordState => ({
  actualWord: '',
  backgroundColor: 'white',
  color: 'black',
  correctWord: word,
})