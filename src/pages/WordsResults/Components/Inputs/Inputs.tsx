import { ChangeEvent } from "../../../../Types/React"
import { WordState } from "../../State/Types"
import { MyInput } from "./Input"

type OnChangeClosure = (index: number) => (event: ChangeEvent) => void 

type InputsProps = {
  wordsArray: WordState[]
  onChangeClosure: OnChangeClosure
}

export const Inputs = ({ wordsArray, onChangeClosure }: InputsProps) => (
  <>
    {wordsArray.map((wordState, index) => (
      <MyInput {...{ index, wordState }} key={wordState.correctWord} onChange={onChangeClosure(index)} />
    ))}
  </>
)