import { useEffect, useRef } from 'react';

// https://www.30secondsofcode.org/react/s/use-title/
const useTitle = (title) => {
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = useRef(documentDefined ? document.title : null);

  useEffect(() => {
    if (!documentDefined) return;

    if (document.title !== title && title) document.title = title;

    return () => {
      document.title = originalTitle.current;
    };
  }, [title]);
};

export { useTitle };
