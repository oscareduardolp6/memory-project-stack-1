import { Nullable } from "./Nullable";
export type PosibleError = Nullable<Error>
export type Result<T> = SuccessResult<T> | FailedResult<T>

type SuccessResult<T> = [T, null] 
type FailedResult<T> = [Nullable<T>, Error]
