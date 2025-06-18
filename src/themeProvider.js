import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
