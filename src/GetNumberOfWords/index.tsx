import { Center, Card, CardHeader, Heading, CardBody, Input, Stack, Button, InputProps } from "@chakra-ui/react"
import { useRef } from "react"
import { numberInputProps } from "../ChakraUIStyleObjects/NumberInput"
import { SubmitEvent } from "../Types/HtmlEvents"
import { getValueFromRef } from "../Utils/React"
import { setNumberOfWords } from "./store"

const GetNumberOfWords = () => {
  const numberOfWordsInput = useRef<HTMLInputElement>(null)
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

  const inputProps: InputProps = {
    size: 'lg', 
    min: 1, 
    max: 100, 
    ...numberInputProps
  }
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
          <Input
            ref={numberOfWordsInput}
            {...inputProps}
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
  )

}

export default GetNumberOfWords