import { InputProps } from "@chakra-ui/react"

type BackgroundColors = InputProps['backgroundColor']
type TextColor = InputProps['color']

export type WordState = {
  correctWord: string
  actualWord: string
  backgroundColor: BackgroundColors
  color: TextColor
}

export interface State {
  wordsData: WordState[]
  answersButtonText: string
  compare(): void
  updateActualWord(index: number, value: string): void
  toggleShowAnswers(): void
}

export type ButtonText = 'Mostrar respuestas' | 'Ocultar respuestas'