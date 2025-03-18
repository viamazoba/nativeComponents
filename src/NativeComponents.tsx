import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/router/Navigator';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ({ children }: PropsWithChildren) => {

  return (
    <NavigationContainer>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NavigationContainer>
  );
};


export const NativeComponents = () => {

  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};
