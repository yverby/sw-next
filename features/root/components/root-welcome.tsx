'use client';

import {
  Button,
  Center,
  VStack,
  Heading,
  Container,
  useColorMode,
} from '@chakra-ui/react';

export const testId = {
  toggleMode: 'welcome-toggle-mode',
};

export function RootWelcome() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" minH="100dvh">
      <Center minH="inherit">
        <VStack spacing={5}>
          <Heading as="h1" size="2xl">
            sw-next
          </Heading>
          <Button data-testid={testId.toggleMode} onClick={toggleColorMode}>
            Switch to {colorMode === 'dark' ? 'Light' : 'Dark'} mode
          </Button>
        </VStack>
      </Center>
    </Container>
  );
}
