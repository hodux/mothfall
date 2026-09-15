'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'mothfall_theme';

const ThemeContext = createContext({
  theme: 'light',
  resolvedTheme: 'light',
  themeMode: 'system',
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value, days = 365) {
  if (typeof document === 'undefined') return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredPreference() {
  if (typeof window === 'undefined') return 'system';
  try {
    const cookieVal = getCookie(STORAGE_KEY);
    if (cookieVal === 'light' || cookieVal === 'dark' || cookieVal === 'system') return cookieVal;

    const localVal = localStorage.getItem(STORAGE_KEY);
    if (localVal === 'light' || localVal === 'dark' || localVal === 'system') return localVal;
  } catch {

  }
  return 'system';
}

function getSnapshot() {
  const pref = getStoredPreference();
  const resolved = pref === 'system' ? getSystemTheme() : pref;
  return `${pref}:${resolved}`;
}

function subscribe(callback) {
  window.addEventListener('storage', callback);
  window.addEventListener('mothfall-theme-change', callback);

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', callback);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(callback);
  }

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('mothfall-theme-change', callback);
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', callback);
    } else if (mediaQuery.removeListener) {
      mediaQuery.removeListener(callback);
    }
  };
}

const emptySubscribe = () => () => {};

export function ThemeProvider({ children, initialTheme = 'system' }) {
  const getServerSnapshot = React.useMemo(() => {
    const initialResolved = initialTheme === 'system' ? 'light' : initialTheme;
    return () => `${initialTheme}:${initialResolved}`;
  }, [initialTheme]);

  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [themeMode, resolvedTheme] = snapshot.split(':');
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    try {
      const cookieVal = getCookie(STORAGE_KEY);
      const localVal = localStorage.getItem(STORAGE_KEY);
      if (!cookieVal && localVal) {
        setCookie(STORAGE_KEY, localVal);
      }
    } catch {
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
  }, [resolvedTheme]);

  const setTheme = (newMode) => {
    try {
      if (newMode === 'system') {
        localStorage.removeItem(STORAGE_KEY);
        setCookie(STORAGE_KEY, 'system');
      } else {
        localStorage.setItem(STORAGE_KEY, newMode);
        setCookie(STORAGE_KEY, newMode);
      }
    } catch {
    }
    window.dispatchEvent(new Event('mothfall-theme-change'));
    window.dispatchEvent(new Event('storage'));
  };

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: resolvedTheme,
        resolvedTheme,
        themeMode,
        toggleTheme,
        setTheme,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
