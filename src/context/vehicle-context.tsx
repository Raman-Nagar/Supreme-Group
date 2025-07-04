"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

interface VehicleContextProps {
  active: number;
  setActive: (index: number) => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  togglePlayPause: () => void;
  progress: number;
  resetProgress: () => void;
}

const VehicleContext = createContext<VehicleContextProps | undefined>(undefined);

export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error("useVehicle must be used within a VehicleProvider");
  }
  return context;
};

export function VehicleProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const resetProgress = () => setProgress(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percentage = (video.currentTime / video.duration) * 100;
      setProgress(percentage || 0);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [active]);

  const value: VehicleContextProps = {
    active,
    setActive: (idx: number) => {
      setActive(idx);
      setProgress(0);
      setIsPlaying(true);
    },
    videoRef,
    isPlaying,
    togglePlayPause,
    progress,
    resetProgress,
  };

  return (
    <VehicleContext.Provider value={value}>
      {children}
    </VehicleContext.Provider>
  );
}
