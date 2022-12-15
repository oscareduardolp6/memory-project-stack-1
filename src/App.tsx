import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { setNumberOfWords } from './GetNumberOfWords/store'
import { useNumberOfWords } from './GetNumberOfWords/useNumberOfWords'
import { SubmitEvent } from './Types/HtmlEvents'
import { getValueFromRef } from './Utils/React'

function App() {
  const numberOfWordsInput = useRef<HTMLInputElement>(null)
  const state = useNumberOfWords()
  const saveNumberOfWords = (event: SubmitEvent) => {
    event.preventDefault()
    const numberOfWords = getValueFromRef<number>(numberOfWordsInput)
    console.log({numberOfWords});
    const inputIsVoid = typeof numberOfWords === 'string'
    if (inputIsVoid) return alert('Ingrese un número')
    const error = setNumberOfWords(numberOfWords)
    numberOfWordsInput.current!.value = ''
    if (error) {
      alert(error.message)
      numberOfWordsInput.current!.focus()
      return
    }
  }

  return (
    <>
      <Center marginTop='3em'>
        <Card>
          <CardHeader>
            <Heading>
              Selecciona la cantidad de palabras que desea recordar: {state.numberOfWords}
            </Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={saveNumberOfWords}>
              <Input
                size='lg'
                placeholder='ejem. 20'
                type='number'
                variant='filled'
                min={1}
                max={100}
                textAlign='center'
                ref={numberOfWordsInput}
              />
              <Stack margin='2em'>
                <Button colorScheme='orange' type='submit'>
                  Guardar
                </Button>
              </Stack>
            </form>
          </CardBody>
        </Card>
      </Center>
    </>
  )
}

export default App
