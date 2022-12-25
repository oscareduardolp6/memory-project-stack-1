import { useRef } from "react"
import { onSubmitClosure, getValueFromRef } from "../../Utils/React"
import { numberOfWords as state } from "./store"
import { useRedirect } from "../../Hooks/useRedirect"

export const useGetNumberOfWords = () => {
  const numberOfWordsInput = useRef<HTMLInputElement>(null)

  const resetInput = () => numberOfWordsInput.current!.value = ''
  const goTo = useRedirect()

  const saveNumberOfWords = onSubmitClosure(() => {
    const numberOfWords = getValueFromRef<number>(numberOfWordsInput)
    const inputIsVoid = typeof numberOfWords === 'string'
    if (inputIsVoid) return alert('Ingrese un número')
    try {
      state.numberOfWords = numberOfWords
      resetInput()
      goTo('/wordsRemember')
    } catch (error) {
      alert('Número invalido')
      console.log(error);
      numberOfWordsInput.current!.focus()
    }
  })
  return { saveNumberOfWords, numberOfWordsInput }
}