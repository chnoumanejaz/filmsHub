'use client';
const { ThemeProvider } = require('next-themes');

function ThemesProvider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default ThemesProvider;
