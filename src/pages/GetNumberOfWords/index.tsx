import { Input, Stack, Button, InputProps } from '@chakra-ui/react'
import { numberInputProps } from '../../ChakraUIStyleObjects/NumberInput'
import { Page } from '../../Layouts/Page'
import { useGetNumberOfWords } from './useGetNumberOfWords'

const inputProps: InputProps = {
  size: 'lg',
  min: 1,
  max: 100,
  ...numberInputProps,
}

const GetNumberOfWords = () => {
  const { numberOfWordsInput, saveNumberOfWords } = useGetNumberOfWords()
  return (
    <Page title='Selecciona la cantidad de palabras que desea recordar'>
      <form onSubmit={saveNumberOfWords}>
        <Input ref={numberOfWordsInput} {...inputProps} />
        <Stack margin='2em'>
          <Button colorScheme='orange' type='submit'>
            Guardar
          </Button>
        </Stack>
      </form>
    </Page>
  )
}

export default GetNumberOfWords
