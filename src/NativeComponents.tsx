import { Navigator } from './presentation/router/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';



export const NativeComponents = () => {

  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};
