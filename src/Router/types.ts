import { RouteObject } from "react-router-dom"

/**
 * A string type of all the posible routes of the app
 */
export type Paths = '/' | '/wordsRemember' | '/results'

/**
 * Adapter of the RouteObject of react router using the Paths type 
 */
export type MyRouteObject = Omit<RouteObject, 'path'> & { path?: Paths }