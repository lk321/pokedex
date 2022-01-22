import { useRef, useEffect } from 'react';

function useLazyLoad({ distance = 20, onLoad = () => null } = {}) {
  const fromRef = useRef(null);

  useEffect(() => {
    function onChange([entry]) {
      if (entry.isIntersecting) {
        onLoad();
      }
    }

    const observer = new IntersectionObserver(onChange, { rootMargin: `${distance}%` });
    observer.observe(fromRef.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return { fromRef };
}

export default useLazyLoad;
