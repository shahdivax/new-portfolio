"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      storageKey="divax-theme"
      {...props}
    >
      <div className="theme-smooth min-h-dvh">{children}</div>
    </NextThemesProvider>
  );
}

