'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { createContext, useContext, useEffect } from 'react'
import darkTheme from '../Theme/darkTheme';
import lightTheme from '../Theme/lightTheme';

type Props = {
    children: React.ReactNode,
    currentMode: 'light' | 'dark'
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

const ThemesProvider = ({children, currentMode}: Props) => {

    const [mode, setMode] = React.useState<'light' | 'dark'>(currentMode);
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
  
    const darkThemeChosen = React.useMemo(
        () =>
            createTheme({
                ...darkTheme
            }),
        [mode],
    )
    const lightThemeChosen = React.useMemo(
        () =>
            createTheme({
                ...lightTheme,
            }),
        [mode],
    )

    const selectedTheme = mode === 'dark' ? darkThemeChosen : lightThemeChosen;

    useEffect(() => {
        setMode(currentMode);
      }, [currentMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider  theme={selectedTheme} >
            {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export const useColorMode = () => useContext(ColorModeContext);

export default ThemesProvider