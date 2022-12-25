import { Result } from "../../../Types/Result";

export type GetRandomWord = (numberOfRandomWords?: number) => Promise<Result<string[]>> 