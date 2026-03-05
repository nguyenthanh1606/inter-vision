'use client';

import { useEffect } from 'react';

export function NavbarEffect() {
  useEffect(() => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 30);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
