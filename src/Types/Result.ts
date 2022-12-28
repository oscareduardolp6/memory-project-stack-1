import { Nullable } from "./Nullable";

/**
 * Defines a System Error that could be null
 */
export type PosibleError = Nullable<Error>

/**
 * Defines the result of a resolve operation that could fail 
 */
export type Result<T> = SuccessResult<T> | FailedResult<T>

/**
 * Defines a Successful result of an operation 
 */
type SuccessResult<T> = [T, null] 

/**
 * Defines a Fail result of an operation
 */
type FailedResult<T> = [Nullable<T>, Error]
