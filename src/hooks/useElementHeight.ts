import { useEffect, useState } from "react";
interface IProps {
  ref: React.RefObject<HTMLElement>;
}
export function useElementHeight(ref: React.RefObject<HTMLElement>) {
  const [height, setHeight] = useState(0);
  console.log(height);
  useEffect(() => {
    // console.log("x");
    if (ref.current) {
      // console.log(ref);
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  return [height, setHeight];
}
