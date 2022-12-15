import { useSnapshot } from 'valtio'
import { getNumberOfWordsStore } from './store'

export const useNumberOfWords = () => {
  const state = useSnapshot(getNumberOfWordsStore)
  return state
}