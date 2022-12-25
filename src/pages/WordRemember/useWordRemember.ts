import { useEffect } from 'react'
import { useChakraNotifier } from './../../Hooks/useChakraNotifier'
import { useWordsRememberSnap, wordsRemember as mutableState } from "./store"
import { useRedirect } from '../../Hooks/useRedirect'

export const useWordRemember = () => {
  const { isLoading, word } = useWordsRememberSnap()
  const notifier = useChakraNotifier()
  const goTo = useRedirect()
  const rememberWord = () => { 
    const finished = mutableState.saveWord(notifier) 
    if(finished) return goTo('/results')
  }
  const changeWord = () => mutableState.getNewRandomWord(notifier)

  useEffect(() => { changeWord() }, [])

  return {
    isLoading,
    word,
    changeWord,
    rememberWord,
  }
}