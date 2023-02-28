import { useState, useMemo, useEffect } from "react";

interface RefObject<T> {
  // immutable
  readonly current: T | null;
}

export default function useIsInViewport(ref: RefObject<any>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
    observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref.current]);

  return isIntersecting;
}
