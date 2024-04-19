import { extendTheme, Theme, DeepPartial } from '@chakra-ui/react';

const colors: DeepPartial<Theme['colors']> = {
  gray: {
    100: '#B8B8B8',
    200: '#828282',
    300: '#696969',
    400: '#424242',
    500: '#3B3B3B',
    600: '#2E2E2E',
    700: '#242424',
    800: '#1F1F1F',
    900: '#141414',
  },
};

const config: Theme['config'] = {
  initialColorMode: 'dark',
};

const components: DeepPartial<Theme['components']> = {
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
