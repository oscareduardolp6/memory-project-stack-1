import {
  Center,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Input,
  Stack,
  Button,
  InputProps,
} from '@chakra-ui/react'
import { numberInputProps } from '../../ChakraUIStyleObjects/NumberInput'
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
    <Center marginTop='3em'>
      <Card>
        <CardHeader>
          <Heading>
            Selecciona la cantidad de palabras que desea recordar
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={saveNumberOfWords}>
            <Input ref={numberOfWordsInput} {...inputProps} />
            <Stack margin='2em'>
              <Button colorScheme='orange' type='submit'>
                Guardar
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Center>
  )
}

export default GetNumberOfWords
