"use client";

import React, { Ref } from "react";

interface VideoProps {
  src: string;
  captions?: string;
  className?: string;
  videoRef: Ref<HTMLVideoElement> | undefined;
}

export default function Video({
  src,
  captions = "/path/to/captions.vtt",
  className = "",
  videoRef,
}: VideoProps) {
  return (
    <video
      key={src}
      ref={videoRef}
      className={` ${className}`}
      autoPlay
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
      <track
        src={captions}
        kind="subtitles"
        srcLang="en"
        label="English"
        default
      />
      Your browser does not support the video tag.
    </video>
  );
}
