import { RouteObject } from "react-router-dom"

export type Paths = '/' | '/wordsRemember' | '/results'

export type MyRouteObject = Omit<RouteObject, 'path'> & { path?: Paths }