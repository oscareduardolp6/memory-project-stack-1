import { proxy } from 'valtio'
import { PosibleError } from '../../Types/Result'
import { isPositiveInteger } from '../../Utils/Number'

type NumberOfWordsStore = { numberOfWords: number }

export const getNumberOfWordsStore = proxy<NumberOfWordsStore>({ numberOfWords: 1 })

export const setNumberOfWords = (numberOfWords: number): PosibleError => {
  if (!isPositiveInteger(numberOfWords))
    return new Error(`El número de palabras debe ser un entero positivo, 
    ${numberOfWords} no cumple con ese requisito`)
  getNumberOfWordsStore.numberOfWords = numberOfWords
  return null
}
