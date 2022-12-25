import { Input } from "@chakra-ui/react"
import { ChangeEvent } from "../../../../Types/React"
import { WordState } from "../../State/Types"

type MyInputProps = {
  wordState: WordState
  index: number
  onChange: (e: ChangeEvent) => void
}

export const MyInput = ({
  wordState: { actualWord, correctWord, ...props },
  index,
  ...rest
}: MyInputProps) => (
  <Input
    key={correctWord}
    value={actualWord}
    placeholder={`Palabra ${index + 1}`}
    _placeholder={{ color: 'gray' }}
    {...props}
    {...rest}
  />
)