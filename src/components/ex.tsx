import React, { useEffect, useRef, useState } from "react";
import HotelDetailTab from "../features/bookings/HotelDetailTab";
import { Container } from "@mui/material";

const ScrollToElement = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const target1Ref = useRef<HTMLDivElement>(null);
  const target2Ref = useRef<HTMLDivElement>(null);
  const target3Ref = useRef<HTMLDivElement>(null);
  // const refs = [
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  // ];
  // const elementRefs = useRef([]);
  const [elementId, setElementId] = useState("overview");
  // const elementRefs = useRef<HTMLDivElement[]>([]);

  const handleSetActiveTab = (str: string) => {
    setElementId(str);
  };
  useEffect(() => {
    const x = targetRef.current?.clientHeight;
    console.log(x);
    const threshold = 0;
    // let th = threshold;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elHeight = entry.boundingClientRect.height;
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            // if (elHeight > window.innerHeight) {
            //   th = ((window.innerHeight * threshold) / elHeight) * threshold;
            // }
            if (
              entry.rootBounds!.height < entry.boundingClientRect.height ||
              entry.intersectionRatio == 1
            ) {
              if (entry.target.id === "overview")
                handleSetActiveTab("overview");
              if (entry.target.id === "rooms") handleSetActiveTab("rooms");
              if (entry.target.id === "amenities") setElementId("amenities");
              if (entry.target.id === "reviews") setElementId("reviews");
            }
          }
          // console.log(th);
        });
      },
      { threshold: [0, 1] }
    );
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    if (target1Ref.current) {
      observer.observe(target1Ref.current);
    }
    if (target2Ref.current) {
      observer.observe(target2Ref.current);
    }
    if (target3Ref.current) {
      observer.observe(target3Ref.current);
    }
    return () => observer.disconnect(); // Clenaup the observer if  component unmount.
  }, []);
  return (
    <Container>
      <HotelDetailTab elementId={elementId} setElementId={setElementId} />
      <div id="overview" ref={targetRef} style={{ backgroundColor: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
      </div>

      <div
        id="rooms"
        ref={target1Ref}
        style={{ backgroundColor: "yellow", maxWidth: "100%" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum nostrum alias iusto in, itaque dolorem earum recusandae nemo
        dignissimos nobis rem iure deleniti asperiores cumque tempora temporibus
        deserunt tenetur Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Laborum nostrum alias iusto in, itaque dolorem earum recusandae
        nemo dignissimos nobis rem iure deleniti asperiores cumque tempora
        temporibus deserunt tenetur Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laborum nostrum alias iusto in, itaque dolorem earum
        recusandae nemo dignissimos nobis rem iure deleniti asperiores cumque
        tempora temporibus deserunt tenetur Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Laborum nostrum alias iusto in, itaque
        dolorem earum recusandae nemo dignissimos nobis rem iure deleniti
        asperiores cumque tempora temporibus deserunt tenetur Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Laborum nostrum alias iusto in,
        itaque dolorem earum recusandae nemo dignissimos nobis rem iure deleniti
        asperiores cumque tempora temporibus deserunt tenetur expedita? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum alias
        iusto in, itaque dolorem earum recusandae nemo dignissimos nobis rem
        iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum nostrum alias iusto in, itaque dolorem earum recusandae nemo
        dignissimos nobis rem iure deleniti asperiores cumque tempora temporibus
        deserunt tenetur Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Laborum nostrum alias iusto in, itaque dolorem earum recusandae
        nemo dignissimos nobis rem iure deleniti asperiores cumque tempora
        temporibus deserunt tenetur Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laborum nostrum alias iusto in, itaque dolorem earum
        recusandae nemo dignissimos nobis rem iure deleniti asperiores cumque
        tempora temporibus deserunt tenetur Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Laborum nostrum alias iusto in, itaque
        dolorem earum recusandae nemo dignissimos nobis rem iure deleniti
        asperiores cumque tempora temporibus deserunt tenetur
      </div>

      <div id="amenities" ref={target2Ref} style={{ backgroundColor: "green" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
      </div>
      <div id="reviews" ref={target3Ref} style={{ backgroundColor: "orange" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
      </div>
      <div id="footer" style={{ backgroundColor: "black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum
        alias iusto in, itaque dolorem earum recusandae nemo dignissimos nobis
        rem iure deleniti asperiores cumque tempora temporibus deserunt tenetur
      </div>
    </Container>
  );
};

export default ScrollToElement;
