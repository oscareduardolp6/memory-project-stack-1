export type GetValueFromRefOptions<T> = {
  defaultValue?: string 
  converter?: (value: string) => T
}

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