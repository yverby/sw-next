import {
  extendTheme,
  Theme,
  DeepPartial,
  ThemeConfig,
  ThemeComponents,
} from '@chakra-ui/react';

const colors: DeepPartial<Theme['colors']> = {
  gray: {
    100: '#e4e4e7',
    200: '#d4d4d8',
    300: '#a1a1aa',
    400: '#71717a',
    500: '#52525b',
    600: '#3f3f46',
    700: '#27272a',
    800: '#18181b',
    900: '#09090b',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const components: ThemeComponents = {
  Button: {
    defaultProps: {
      variant: 'outline',
    },
  },
};

export const theme = extendTheme({
  colors,
  config,
  components,
});
