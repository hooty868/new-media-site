import { useEffect, useState } from 'react';
import isServer from 'utils/isServer';

/**
 * This is a CSS media query hook which listens for matches to a CSS media query.
 * It allows the rendering of components based on whether the query matches or not.
 * @param {string} query media query condition
 * @returns {boolean} whether the condition is matchable
 *
 * const matches = useMediaQuery('(min-width: 768px)')
 * -> true or false
 *
 * https://usehooks-ts.com/react-hook/use-media-query
 */
function useMediaQuery(query: string): boolean {
  const getMatches = (mediaQuery: string): boolean => !isServer && window.matchMedia(mediaQuery).matches;

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Before Safari 14,
    // MediaQueryList is based on EventTarget and only supports addListener/removeListener for media queries.
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
