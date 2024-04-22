import Link from 'next/link';
import { Box, Container, HStack, Heading, Stack } from '@chakra-ui/react';

import { APP_NAME } from '@/config/app';
import { ToggleMode } from '@/components/theme';

export function RootShell({ children }: React.PropsWithChildren) {
  return (
    <Stack pos="relative" minH="100dvh" spacing={6} pb={6}>
      <Box
        pos="sticky"
        top={0}
        zIndex={1}
        borderBottomWidth={1}
        bg="var(--chakra-colors-chakra-body-bg)"
      >
        <Container
          h="65px"
          as={HStack}
          maxW="container.xl"
          justify="space-between"
        >
          <Link href="/">
            <Heading as="h1" size="lg" fontWeight="800" opacity={0.6}>
              {APP_NAME}
            </Heading>
          </Link>

          <ToggleMode />
        </Container>
      </Box>

      <Container as={Stack} flex="1" maxW="container.xl">
        {children}
      </Container>
    </Stack>
  );
}
