import 'styled-components';
import { myTheme } from './styles/theme';

declare module 'styled-components' {
   type MyTheme = typeof myTheme
   export interface DefaultTheme extends MyTheme { }
}