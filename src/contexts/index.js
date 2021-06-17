import { createContext } from 'react';
import CONSTANTS from 'constants.js';
const { THEMES } = CONSTANTS;
export const UserContext = createContext(null);
export const ThemeContext = createContext(THEMES.LIGHT);
