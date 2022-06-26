import {themeContext,ThemeType} from 'contexts/ThemeContext';
import { useContext } from 'react';

export function useTheme() : ThemeType{
    return useContext(themeContext)
}