import { useState, useEffect } from "react";

export default function useScrollVisibility(scrollThreshold: number) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > scrollThreshold) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", controlNavbar);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return show;
}
// export default function useScrollVisibility(scrollThreshold: number) {
//   const [isVisible, setIsVisible] = useState<boolean | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || document.documentElement.scrollTop;
//       // console.log("run");

//       // Check if the scroll position is below the specified threshold
//       setIsVisible(scrollY > scrollThreshold);
//     };

//     // Attach the scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollThreshold]);

//   return isVisible;
// }
