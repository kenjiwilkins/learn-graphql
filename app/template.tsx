'use client';

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayoutTemplate({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}