import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/router/Navigator';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';


const AppNavigation = ({ children }: PropsWithChildren) => {

  const { isDark } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppTheme = ({ children }: PropsWithChildren) => {

  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};


export const NativeComponents = () => {

  return (
    <AppTheme>
      <Navigator />
    </AppTheme>
  );
};
