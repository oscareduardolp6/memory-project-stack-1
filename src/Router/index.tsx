import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { MyRouteObject } from './types'
import GetNumberOfWords from '../pages/GetNumberOfWords'
import WordsResults from '../pages/WordsResults'
import WordRemember from '../pages/WordRemember'

const inputNumberOfPaths: MyRouteObject = {
  path: '/',
  element: <GetNumberOfWords />,
  index: true,
}

const wordsRemember: MyRouteObject = {
  path: '/wordsRemember',
  element: <WordRemember />,
}

const wordsResults: MyRouteObject = {
  path: '/results',
  element: <WordsResults />,
}

const routes: MyRouteObject[] = [
  inputNumberOfPaths,
  wordsRemember,
  wordsResults,
]

export const router = createBrowserRouter(routes as RouteObject[])
