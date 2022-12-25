import { proxy, useSnapshot } from "valtio"
import { ButtonText, State, WordState } from "./Types"
import { compareStrings } from "../../../Utils/Strings"

class InitialState implements State {
  public wordsData: WordState[] = []
  private originalWords: string[] = []
  private _answersButtonText: ButtonText = 'Mostrar respuestas'

  get answersButtonText() {
    return this._answersButtonText
  }

  updateActualWord(index: number, value: string): void {
    const actualData = this.wordsData[index] 
    actualData.actualWord = value 
  }

  toggleShowAnswers(): void {
    if(this._answersButtonText === 'Mostrar respuestas') 
      return this.showCorrectAnswers()
    return this.hideCorrectAnswers()
  }

  compare(): void {
    if(this._answersButtonText === 'Ocultar respuestas') 
      this.toggleShowAnswers()
    for (const data of this.wordsData) {
      const { actualWord, correctWord } = data 
      const isCorrect = compareStrings(actualWord, correctWord)
      data.backgroundColor = 
        isCorrect 
        ? 'green.500' 
        : 'red.500'
      data.color = 'white'
    }
  }

  private showCorrectAnswers(): void {
    this.originalWords = this.wordsData.map(({actualWord}) => actualWord)
    for(const data of this.wordsData) {
      const { correctWord } = data
      data.actualWord = correctWord
      data.backgroundColor = 'yellow.600'
      data.color = 'white'
    }
    this._answersButtonText = 'Ocultar respuestas'
  }

  private hideCorrectAnswers(): void {
    for (let index = 0; index < this.originalWords.length; index++) 
      this.wordsData[index] = {
        ...this.wordsData[index], 
        actualWord: this.originalWords[index], 
        backgroundColor: 'white', 
        color: 'black', 
      }
    this._answersButtonText = 'Mostrar respuestas'
  }

}

export const wordsResults = proxy<State>(new InitialState())
export const useWordsResultSnap = () => useSnapshot(wordsResults)