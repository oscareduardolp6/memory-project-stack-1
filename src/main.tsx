import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeProvider>
        <RouterProvider  {...{router}} />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
)
