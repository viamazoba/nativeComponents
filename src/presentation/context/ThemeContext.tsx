import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';
import { useColorScheme } from 'react-native';
//import { Appearance, AppState } from 'react-native';


type ThemeColor = 'light' | 'dark';


interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;

    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: PropsWithChildren) => {

    const colorScheme = useColorScheme(); // Así captura el theme configurado del SO
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');


    useEffect(() => {
        if (colorScheme === 'dark') {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }

    }, [colorScheme]);

    // La siguiente manera también sirve para cambiar el theme con el sistema
    // la diferencia es que lo hace por un listener que capta si la app está en activa o no

    /*  useEffect(() => {
         const subscription = AppState.addEventListener('change', nextAppState => {
             const colorSchemeSystem = Appearance.getColorScheme();
             setCurrentTheme( colorSchemeSystem === 'dark' ? 'dark' : 'light');
         });

         return () => {
             subscription.remove();
         };
     }, []); */

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                currentTheme: currentTheme,
                isDark: (currentTheme !== 'light'),
                colors: (currentTheme === 'light' ? lightColors : darkColors),
                setTheme: setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
