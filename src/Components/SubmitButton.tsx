import { Button, ButtonProps } from '@chakra-ui/react'

export type SubmitButtonsProps = {
  children: React.ReactNode
} & Omit<ButtonProps, 'colorScheme' | 'type'>

export const SubmitButton = ({children, ...props}: SubmitButtonsProps) => (
  <Button colorScheme='orange' type='submit' {...props}>
    {children}
  </Button>
)
