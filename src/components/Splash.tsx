'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { VIDEOS } from '@/constants/videos';

interface SplashProps {
  onComplete?: () => void;
  duration?: number;
}

export const Splash = ({ onComplete, duration = 3000 }: SplashProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const videoUrls = Object.values(VIDEOS);
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount += 1;
      const percentage = (loadedCount / videoUrls.length) * 100;
      setProgress(Math.min(percentage, 99));

      if (loadedCount === videoUrls.length) {
        // All videos loaded, wait a bit then complete
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 300);
        }, 300);
      }
    };

    // Preload all videos
    videoUrls.forEach((videoUrl) => {
      const video = document.createElement('video');
      video.src = videoUrl;
      video.preload = 'auto';

      video.addEventListener('loadeddata', updateProgress, { once: true });
      video.addEventListener('error', updateProgress, { once: true });

      // Fallback in case video doesn't load
      setTimeout(() => {
        if (video.readyState < 2) {
          updateProgress();
        }
      }, 2000);
    });

    // Fallback timeout to ensure splash ends
    const fallbackTimer = setTimeout(() => {
      if (progress < 100) {
        setProgress(100);
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 300);
      }
    }, duration);

    return () => clearTimeout(fallbackTimer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Logo animation with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/assets/logoWh.png"
          alt="Kwings Logo"
          width={200}
          height={200}
          priority
        />
      </motion.div>

      {/* Progress bar at bottom */}
      <motion.div
        className="absolute bottom-12 w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'linear' }}
        />
      </motion.div>

      {/* Progress percentage text */}
      <motion.p
        className="absolute bottom-4 text-white text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.round(progress)}%
      </motion.p>
    </div>
  );
};

export default Splash;
