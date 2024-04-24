import Link from 'next/link';
import { Button } from '@chakra-ui/react';

import { Placeholder } from '@/components/ui';

export default function RootNotFound() {
  return (
    <Placeholder title="Not found">
      <Button as={Link} href="/">
        Go to Home page
      </Button>
    </Placeholder>
  );
}
