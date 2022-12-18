import { PosibleError } from "../Types/Result"

export const manageError = (error: PosibleError) => {
  if(!error) return 
  alert(error.message) 
}
