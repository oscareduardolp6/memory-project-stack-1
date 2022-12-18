import { SubmitEvent } from "../Types/HtmlEvents"

/**
 * @field defaultValue The default value to return in case that the `ref.current` to be falsy, by default is `''`
 * @field converter A Function to convert the value getted in the `ref`
 */
export type GetValueFromRefOptions<T> = {
  defaultValue?: string 
  converter?: (value: string) => T
}

/**
 * Takes a ref and make all the calculations and tranformations to convert the input in the T Type, 
 * if the value of current is a valid number returns it by default, without need of converter 
 * @param ref A *React* reference 
 * @param options A configuration object to manage extra behaivor 
 * @returns The value casted to the Type T passed to the function or infered 
 */
export const getValueFromRef = <T>(ref: React.RefObject<HTMLInputElement>, options?: GetValueFromRefOptions<T>): number | string | T => {
  const myOptions = options ?? {}
  const {converter, defaultValue = ''} = myOptions
  if(!ref.current) return defaultValue
  const rawValue = ref.current.valueAsNumber 
  const isNumber = !isNaN(rawValue)
  if(isNumber) return rawValue
  const value = ref.current.value 
  if(converter) return converter(value)
  return value
}

/**
 * 
 * @param callback The function to be executed after the `preventDefault()`
 * @returns A function that before of executing the callback, prevent the default behaivor of the form
 */
export const onSubmitClosure = (callback: () => void): (event: SubmitEvent) => void => event => {
  event.preventDefault()
  callback()
}