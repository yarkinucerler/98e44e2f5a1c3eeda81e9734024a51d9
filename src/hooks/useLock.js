import { useEffect } from 'react';

export function useLock(lock) {
  useEffect(() => {
    if (lock) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [lock]);
}