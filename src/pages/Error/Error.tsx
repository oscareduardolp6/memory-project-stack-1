import { Container, Heading, Text } from "@chakra-ui/react"
import { useRouteError } from "react-router-dom"

export const Error = () => {
  const error = useRouteError() as any
  console.error(error) 
  return (
    <Container background='red.100' width='500%' >
      <Heading>Opps!</Heading> 
      <Text>Ha ocurrido un error inesperado</Text>
      <Text as='i'>{error?.statusText || error?.message}</Text>
    </Container>
  )
}