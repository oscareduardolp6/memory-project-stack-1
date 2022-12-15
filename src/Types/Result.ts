import { Nullable } from "./Nullable";
export type Result<T> = [Nullable<T>, PosibleError]
export type PosibleError = Nullable<Error>