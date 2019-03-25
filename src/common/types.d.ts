import { Theme } from '../theme';

declare module 'styled-components' {
  // Need to override DefaultTheme interface
  // for styled-components to infer correct
  // theme prop type
  interface DefaultTheme extends Theme {}
}
