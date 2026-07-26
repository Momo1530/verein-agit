"use client";
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'agit-language';

export function useLanguage(defaultLang = 'de') {
  const [lang, setLang] = useState(defaultLang);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      const storedLang = window.localStorage.getItem(STORAGE_KEY);
      const initialLang = urlLang || storedLang || defaultLang;
      if (initialLang && initialLang !== defaultLang) {
        setLang(initialLang);
      }
    } catch (e) {
      // ignore localStorage errors
    }
    setIsLoaded(true);
  }, [defaultLang]);

  const changeLang = (newLang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, newLang);
      } catch (e) {
        // ignore
      }
    }
  };

  return { lang, setLang: changeLang, isLoaded };
}
