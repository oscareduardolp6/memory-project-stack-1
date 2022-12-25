import { ReactNode } from 'react'
import { Text, Stack as ChakraStack } from '@chakra-ui/react'

type WithChildren = { children?: ReactNode }

export const Word = ({ children: word }: WithChildren) => (
  <Text as='i' fontSize='4xl'>
    {word}
  </Text>
)

export const ButtonContainer = ({ children }: WithChildren) => (
  <ChakraStack direction='row' marginTop='2em'>
    { children }
  </ChakraStack>
)

