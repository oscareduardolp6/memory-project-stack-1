export type EventName = 
  'NumberOfWordsSetted' 
  | 'AllWordRemembered'
  
export type EventListener = (event?: Event) => void

export type EventData = {}