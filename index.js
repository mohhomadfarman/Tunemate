/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';

export default function Main() {

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});
    return (
      <PaperProvider>
        <ThemeProvider theme={theme}>
        <SafeAreaProvider>
        <App />
        </SafeAreaProvider>
        </ThemeProvider>
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
