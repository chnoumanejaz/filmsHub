'use client';
import { useTheme } from 'next-themes';
import { LuSunDim } from 'react-icons/lu';
import { BsMoonStarsFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function ThemeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <button
      className="bg-blue-50 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-800 p-2 border rounded-md text-blue-700 shadow-sm hover:bg-blue-100 hover:text-blue-900 transition"
      onClick={() =>
        mounted && currentTheme === 'light'
          ? setTheme('dark')
          : setTheme('light')
      }>
      {mounted && currentTheme === 'dark' ? <LuSunDim /> : <BsMoonStarsFill />}
    </button>
  );
}

export default ThemeButton;
