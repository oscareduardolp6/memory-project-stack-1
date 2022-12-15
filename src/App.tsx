import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Input,
} from '@chakra-ui/react'

function App() {
  return (
    <>
      <Center marginTop='3em'>
        <Card>
          <CardHeader>
            <Heading>
              Selecciona la cantidad de palabras que desea recordar
            </Heading>
          </CardHeader>
          <CardBody>
            <Input
              size='lg'
              placeholder='ejem. 20'
              type='number'
              variant='filled'
              min={1}
              max={100}
              textAlign='center'
            />
          </CardBody>
        </Card>
      </Center>
    </>
  )
}

export default App
