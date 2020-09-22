import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider
} from 'viviui'
import Head from 'next/head'

const App = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          {children}
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
