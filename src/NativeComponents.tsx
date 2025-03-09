import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/router/Navigator';


export const NativeComponents = () => {

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
