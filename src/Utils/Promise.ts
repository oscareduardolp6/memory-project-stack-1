import { Result } from "../Types/Result"

/**
 * 
 * @param promise 
 * @returns An Array where the first value is the result of the promise and the second 
 * is the catched error, if no error, then null is returned as second value & if an error is 
 * catched, then null is returned in first value
 */
export const resolve = async <T> (promise: Promise<T>): Promise<Result<T>> => {
  try {
    const result = await promise 
    return [result, null]
  } catch(error) {
    if(error instanceof Error) 
      return [null, error]
    if(typeof error === 'string')
      return [null, new Error(error)]
    return [null, new Error('Error desconocido', {cause: error})]
  }
}