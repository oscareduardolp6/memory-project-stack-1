type AlertFunctionParams = {
  message: string 
  title?: string 
}

export type AlertFunction = (params: AlertFunctionParams) => void

export interface Notifier {
  alertSuccess: AlertFunction
  alertError: AlertFunction
  alertWarning: AlertFunction
  alertInfo: AlertFunction
}