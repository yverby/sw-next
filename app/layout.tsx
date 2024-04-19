import { Viewport, Metadata } from 'next/types';

import { QueryClientProvider } from '@/providers/query-client';
import { ThemeProvider, ThemeModeProvider } from '@/providers/theme';

export const metadata: Metadata = {
  title: 'sw-next',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ThemeModeProvider />
      </head>
      <body>
        <QueryClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
