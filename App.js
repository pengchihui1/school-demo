import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider
} from 'viviui'

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
