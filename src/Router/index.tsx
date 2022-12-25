import { RouteObject, createHashRouter } from 'react-router-dom'
import { MyRouteObject } from './types'
import GetNumberOfWords from '../pages/GetNumberOfWords'
import WordsResults from '../pages/WordsResults'
import WordRemember from '../pages/WordRemember'
import Error from '../pages/Error/'

const inputNumberOfPaths: MyRouteObject = {
  path: '/',
  element: <GetNumberOfWords />,
  index: true,
  errorElement: <Error />,
}

const wordsRemember: MyRouteObject = {
  path: '/wordsRemember',
  element: <WordRemember />,
  errorElement: <Error />,
}

const wordsResults: MyRouteObject = {
  path: '/results',
  element: <WordsResults />,
  errorElement: <Error />,
}

const routes: RouteObject[] = [
  inputNumberOfPaths,
  wordsRemember,
  wordsResults,
] as RouteObject[]

// export const router = createBrowserRouter(routes as RouteObject[])
export const router = createHashRouter(routes) 
