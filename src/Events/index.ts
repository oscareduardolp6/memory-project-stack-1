import { fromEvent } from "rxjs"
import { Subscription } from "rxjs/internal/Subscription"
import { EventName } from "./Types"

const unsuscribers: Record<EventName,Subscription | null>  = {
  AllWordRemembered: null, 
  NumberOfWordsSetted: null
}

export const suscribe = (eventName: EventName, listener: EventListener) => {
  const suscription = fromEvent(document, eventName).subscribe(listener)
  unsuscribers[eventName] = suscription
}

export const unsuscribe = (eventName: EventName) => 
  unsuscribers[eventName]?.unsubscribe()

export const publish = <T>(eventName: EventName, data?: T) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}