import { useState, useEffect } from "react";

export default function useScrollVisibility(scrollThreshold: number) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Check if the scroll position is below the specified threshold
      setIsVisible(scrollY < scrollThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return isVisible;
}
