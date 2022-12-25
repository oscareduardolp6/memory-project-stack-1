import { proxy, useSnapshot } from "valtio"
import { GetRandomWord } from "./Domain/RandomWordRepository"
import { Notifier } from "../../Domain/Notifier"
import { getRandomWord } from "./Infrastructure/localhostRandomWordRepository"
import { numberOfWords } from "../GetNumberOfWords/store"

interface State {
  word: string
  isLoading: boolean
  rememberedWords: string[]
  getNewRandomWord(notifier: Notifier): Promise<void>
  saveWord(notifier: Notifier): boolean
}

class InitialState implements State {
  private _word = ''
  private _rememberedWords: string[] = []
  public isLoading = false

  constructor(private getRandomWord: GetRandomWord) { }

  get word() { return this._word }
  get rememberedWords() { return this._rememberedWords }

  saveWord(notifier?: Notifier): boolean {
    try {
      this._rememberedWords.push(this._word)
      notifier?.alertSuccess({ message: 'Palabra guardada con éxito' })
      if(this._rememberedWords.length === numberOfWords.numberOfWords)
        return true 
      this.getNewRandomWord()
    } catch (error) {
      notifier?.alertError({ message: `Hubo un error al guardar la palabra ${error}` })
    }
    return false 
  }

  async getNewRandomWord(notifier?: Notifier) {
    this.isLoading = true
    const [randomWords, error] = await this.getRandomWord()
    if (error) {
      const { name, message } = error
      this.isLoading = false
      return notifier?.alertError({ message, title: name })
    }
    const [randomWord] = randomWords
    if(this.rememberedWords.includes(randomWord)) 
      this.getNewRandomWord()
    else {
      this._word = randomWord
      this.isLoading = false
    }
  }
}

export const wordsRemember = proxy<State>(new InitialState(getRandomWord))
export const useWordsRememberSnap = () => useSnapshot(wordsRemember)