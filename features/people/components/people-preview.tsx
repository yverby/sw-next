'use client';

import { useRouter } from 'next/navigation';
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

export function PeoplePreview({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const drawer = useDisclosure({ isOpen: true });

  const handleClose = () => {
    router.back();
    drawer.onClose();
  };

  return (
    <Drawer
      placement="bottom"
      closeOnOverlayClick
      onClose={handleClose}
      isOpen={drawer.isOpen}
    >
      <DrawerOverlay />
      <DrawerContent h="80%">
        <DrawerBody as={Stack}>
          <Container as={Stack} flex="1" maxW="container.xl">
            {children}
          </Container>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
