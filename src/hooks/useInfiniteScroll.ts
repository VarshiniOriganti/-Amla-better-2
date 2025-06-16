import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  hasMore: boolean;
  loadMore: () => void | Promise<void>;
  threshold?: number;
  rootMargin?: string;
}

export function useInfiniteScroll({
  hasMore,
  loadMore,
  threshold = 0.1,
  rootMargin = '0px',
}: UseInfiniteScrollOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading) {
        setIsLoading(true);
        Promise.resolve(loadMore()).finally(() => {
          setIsLoading(false);
        });
      }
    },
    [hasMore, isLoading, loadMore]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin,
      threshold,
    };

    observer.current = new IntersectionObserver(handleObserver, options);

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleObserver, rootMargin, threshold]);

  return { loadMoreRef, isLoading };
}
