'use client';

import { useState, useEffect } from 'react';
import Splash from '@/components/Splash';

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setShowSplash(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (!isHydrated) {
    return children;
  }

  return (
    <>
      {showSplash && <Splash onComplete={handleSplashComplete} />}
      {!showSplash && children}
    </>
  );
}
