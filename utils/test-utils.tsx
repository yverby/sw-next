import userEvent from '@testing-library/user-event';
import {
  RenderOptions,
  render as testingLibraryRender,
} from '@testing-library/react';

import { ThemeProvider } from '@/providers/theme';
import { QueryClientProvider } from '@/providers/query-client';

function render(ui: React.ReactNode, renderOptions?: RenderOptions) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: React.PropsWithChildren) => (
      <QueryClientProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    ),
    ...renderOptions,
  });
}

export * from '@testing-library/react';
export { render, userEvent };
