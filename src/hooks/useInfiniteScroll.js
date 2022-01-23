import {
  useRef,
  useEffect,
  useCallback,
} from 'react';

function useInfiniteScroll({ distance = 10, onNearOfVisor } = {}) {
  const visorRef = useRef(null);

  const handleChangeScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      if (typeof onNearOfVisor === 'function') {
        onNearOfVisor();
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleChangeScroll, { rootMargin: `${distance}%` });
    if (visorRef.current) {
      observer.observe(visorRef.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  return { visorRef };
}

export default useInfiniteScroll;
