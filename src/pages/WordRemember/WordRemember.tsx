import { Page } from '../../Layouts/Page'
import { Button, Center } from '@chakra-ui/react'
import { Spinner } from '../../Components/Spinner'
import { ButtonContainer, Word } from './Components'
import { useWordRemember } from './useWordRemember'

const buttonSize = { width: '50%' }

export const WordRemember = () => {
  const { isLoading, changeWord, rememberWord, word } = useWordRemember()
  return (
    <Page title='¿Puedes recordar la palabra?'>
      <Center>{isLoading ? <Spinner /> : <Word>{word}</Word>}</Center>
      {!isLoading && (
        <ButtonContainer>
          <Button {...buttonSize} colorScheme='teal' onClick={changeWord}>
            Cambiar
          </Button>
          <Button {...buttonSize} colorScheme='green' onClick={rememberWord}>
            Recordar
          </Button>
        </ButtonContainer>
      )}
    </Page>
  )
}
