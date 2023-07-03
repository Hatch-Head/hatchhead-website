"use client";

import { useEffect, useState, VideoHTMLAttributes } from "react";

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {}

const Video = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <video {...props} /> : null;
};

export default Video;
