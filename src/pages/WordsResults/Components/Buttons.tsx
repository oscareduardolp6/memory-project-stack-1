import { Button } from '@chakra-ui/react'

type ShowAndHideAnswersButtonProps = {
  toggleShowAnswers: VoidFunction
  answersButtonText: string
}

export const ShowAndHideAnswersButton = ({
  toggleShowAnswers,
  answersButtonText: answerButtonText,
}: ShowAndHideAnswersButtonProps) => (
  <Button
    onClick={toggleShowAnswers}
    marginTop={5}
    type='button'
    colorScheme='yellow'>
    {answerButtonText}
  </Button>
)

type ResetButtonProps = {
  resetApp: VoidFunction
}

export const ResetButton = ({ resetApp }: ResetButtonProps) => (
  <Button alignSelf='end' colorScheme='red' onClick={resetApp}>
    Reiniciar
  </Button>
)

export const CompareButton = () => (
  <Button marginTop={5} type='submit' colorScheme='blue'>
    Comparar
  </Button>
)
