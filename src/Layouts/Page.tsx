import { Card, CardBody, CardHeader, Center, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type PageProps = {
  title: string | ReactNode
  children: ReactNode
}

export const Page = ({ title, children }: PageProps) => (
  <Center marginTop='3em'>
    <Card>
      <CardHeader>
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  </Center>
)
