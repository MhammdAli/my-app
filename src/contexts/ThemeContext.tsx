import React, { createContext } from "react";
 

///////////////////// TYPESCRIPT TYPES /////////////////////
export type ThemeModeType = 'dark' | 'light'

export type ThemeType = {
    mode ?: 'dark' | 'light',
    changeTheme ?: (colorMode : ThemeModeType) => void,
    toggle ?: ()=>void
} 

//////////////////////////////////////////////////////////

export const themeContext = createContext<ThemeType>({});

interface ThemeProps {
    children ?: React.ReactElement
}

export const ThemeProvider : React.FC<ThemeProps> = ({children})=>{

    const [mode , setMode] = React.useState<ThemeModeType>('dark');

    const changeTheme = (colorMode : ThemeModeType)=>{
         setMode(colorMode)
    }

    const toggle = ()=>{
        setMode(mode === 'dark' ? 'light' : 'dark')
    }
  
    return (
        <div className={`App ${mode}`}>
            <themeContext.Provider value={{mode,changeTheme,toggle}}>
                {children}
            </themeContext.Provider> 
        </div>
    )

}
