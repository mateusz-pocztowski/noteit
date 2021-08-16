import React, { createContext, useState, useEffect } from 'react'
import {
  ThemeProvider as ThemeProviderSC,
  DefaultTheme,
} from 'styled-components'
import { lightTheme, darkTheme, baseTheme } from 'theme/mainTheme'
import GlobalStyle from 'theme/GlobalStyle'

interface ThemeContextProps {
  isDarkTheme: boolean
  toggleTheme: () => void
}

const darkMode: DefaultTheme = {
  ...baseTheme,
  colors: { ...baseTheme.colors, ...darkTheme },
}

const lightMode: DefaultTheme = {
  ...baseTheme,
  colors: { ...baseTheme.colors, ...lightTheme },
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkTheme: false,
  toggleTheme: () => null,
})

const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
  const [appTheme, setAppTheme] = useState<DefaultTheme>(lightMode)

  const setTheme = (mode: DefaultTheme, isDark: boolean) => {
    localStorage.setItem('dark-theme', JSON.stringify(isDark))
    setIsDarkTheme(isDark)
    setAppTheme(mode)
  }

  const toggleTheme = () => {
    if (isDarkTheme) setTheme(lightMode, false)
    else setTheme(darkMode, true)
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem('dark-theme')
    if (isDarkMode && !JSON.parse(isDarkMode)) {
      setAppTheme(lightMode)
      setIsDarkTheme(false)
    }
  }, [])

  return (
    <ThemeProviderSC theme={appTheme}>
      <GlobalStyle />
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProviderSC>
  )
}

export default ThemeProvider
