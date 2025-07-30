import { useEffect, useState } from "react";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    function updateIsDesktop() {
      setIsDesktop(window.innerWidth > 768);
    }
    window.addEventListener('resize', updateIsDesktop);
    updateIsDesktop();
    return () => window.removeEventListener('resize', updateIsDesktop);
  }, []);

  return isDesktop;
}
