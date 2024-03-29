import { useEffect } from 'react'
import { ChangeEvent } from "../../Types/React"
import { onSubmitClosure } from "../../Utils/React"
import { useWordsRememberSnap } from '../WordRemember/store'
import { useWordsResultSnap, wordsResults as state } from "./State"
import { useRedirect } from '../../Hooks/useRedirect'
import { reset } from './reset'
import { wordToState } from './State/Utils'

/**
 * Contains the behaivor of the Words Results page 
 * @returns 
 */
export const useWordsResults = () => {
  const { wordsData, answersButtonText } = useWordsResultSnap()
  const { rememberedWords } = useWordsRememberSnap()
  const goTo = useRedirect()

  const toggleShowAnswers = () => state.toggleShowAnswers()
  const compare = onSubmitClosure(() => state.compare())
  const updateWordClosure = (index: number) => ({ target: { value } }: ChangeEvent) =>
    state.updateActualWord(index, value)
  const resetApp = () => {
    goTo('/')
    document.location.reload()
  }

  useEffect(() => {
    state.wordsData = rememberedWords.map(wordToState)
  }, [rememberedWords])

  return {
    compare,
    wordsData,
    updateWordClosure,
    resetApp,
    answersButtonText,
    toggleShowAnswers,
  }
}