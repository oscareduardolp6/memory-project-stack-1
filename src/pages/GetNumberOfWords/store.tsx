import { proxy, useSnapshot } from 'valtio'
import { isPositiveInteger } from '../../Utils/Number'

interface State { numberOfWords: number }

class InitialState {
  private num = 1

  get numberOfWords() {
    return this.num
  }

  set numberOfWords(value: number) {
    if(!isPositiveInteger(value)) throw new Error(`El número de palabras debe ser un entero positivo`)
    this.num = value
  }
}

export const numberOfWords = proxy<State>(new InitialState())

export const useNumberOfWordsStateSnap = () => useSnapshot(numberOfWords)

declare module 'valtio' {
  function useSnapshot<T extends object>(p: T): T
}