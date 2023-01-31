import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
