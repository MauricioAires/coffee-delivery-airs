import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeTye = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTye {}
}
