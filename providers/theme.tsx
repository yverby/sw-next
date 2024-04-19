'use client';

import {
  ChakraProvider,
  ColorModeScript,
  localStorageManager,
} from '@chakra-ui/react';

import { theme } from '@/lib/theme';

export function ThemeModeProvider() {
  return (
    <ColorModeScript
      type="localStorage"
      initialColorMode={theme.config?.initialColorMode}
    />
  );
}

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      {children}
    </ChakraProvider>
  );
}
