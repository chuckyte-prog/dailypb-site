import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    try { localStorage.setItem('theme', 'light'); } catch (e) {}
  }, []);
  return <>{children}</>;
}
