import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider,
  useColorMode
} from 'viviui'
import { button } from '@storybook/addon-knobs'
// import 'ag-grid/dist/styles/ag-grid.css'
// import 'ag-grid/dist/styles/ag-theme-material.css'
import 'ag-grid-enterprise'

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode()

  const label = 'Switch color mode'
  const handler = () => toggleColorMode()
  button(label, handler)
  return null
}

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ColorModeSwitch />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
