import { useRef, useCallback, useLayoutEffect } from 'react';

import { Box } from '@chakra-ui/react';

/**
 * This component should be used as a wrapper for ReactFlow component
 * to avoid issues with dehydration of the component
 *
 * The main purpose of the component is to redefine the dimensions of the element
 * depending on the exact dimensions of the parent element
 */
export function FlowContainer({ children }: React.PropsWithChildren) {
  const ref = useRef<React.ElementRef<'div'>>(null);

  const resize = useCallback(() => {
    if (ref.current) {
      const node = ref.current;
      const parent = node.parentElement;

      if (parent instanceof HTMLElement) {
        node.style.setProperty('width', `${parent.clientWidth}px`);
        node.style.setProperty('height', `${parent.clientHeight}px`);
      }
    }
  }, []);

  useLayoutEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  return <Box ref={ref}>{children}</Box>;
}
