import { SimpleGrid } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Grid = ({ children }: PropsWithChildren) => (
  <SimpleGrid columns={2} spacing={5}>
    {children}
  </SimpleGrid>
)
