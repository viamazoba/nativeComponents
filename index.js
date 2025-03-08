/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { NativeComponents } from './src/NativeComponents.tsx';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => NativeComponents);
