import { extendTheme } from '@chakra-ui/react'
import type { ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark', 
  useSystemColorMode: true
}

export const theme = extendTheme({ config })
