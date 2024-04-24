'use client';

import Link from 'next/link';
import { Button } from '@chakra-ui/react';

import { Placeholder } from '@/components/ui';

export default function RootError() {
  return (
    <Placeholder title="Oops!" subtitle="Something went wrong">
      <Button as={Link} href="/">
        Go to Home page
      </Button>
    </Placeholder>
  );
}
