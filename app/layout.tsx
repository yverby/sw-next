import { Viewport, Metadata } from 'next/types';

import { APP_NAME } from '@/config/app';
import { QueryClientProvider } from '@/providers/query-client';
import { ThemeProvider, ThemeModeProvider } from '@/providers/theme';
import { RootShell } from '@/features/root/components';

export const metadata: Metadata = {
  title: APP_NAME,
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
          <ThemeProvider>
            <RootShell>{children}</RootShell>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
