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

function mocks<T extends Record<string, any>>(mocks: T) {
  return Object.entries(mocks).reduce(
    (acc, [key, mock]) => ({ ...acc, [key]: mock }),
    {} as Record<keyof T, jest.Mock>
  );
}

export * from '@testing-library/react';
export { render, userEvent, mocks };
