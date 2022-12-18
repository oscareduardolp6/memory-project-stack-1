import { useRef } from "react"
import { manageError } from "../../Utils/NavigatorUtils"
import { onSubmitClosure, getValueFromRef } from "../../Utils/React"
import { setNumberOfWords } from "./store"

export const useGetNumberOfWords = () => {
  const numberOfWordsInput = useRef<HTMLInputElement>(null)

  const resetInput = () => numberOfWordsInput.current!.value = ''

  const saveNumberOfWords = onSubmitClosure(() => {
    const numberOfWords = getValueFromRef<number>(numberOfWordsInput)
    const inputIsVoid = typeof numberOfWords === 'string'
    if (inputIsVoid) return alert('Ingrese un número')
    const error = setNumberOfWords(numberOfWords)
    resetInput()
    manageError(error)
    error && numberOfWordsInput.current!.focus()
  })
  return { saveNumberOfWords, numberOfWordsInput }
}