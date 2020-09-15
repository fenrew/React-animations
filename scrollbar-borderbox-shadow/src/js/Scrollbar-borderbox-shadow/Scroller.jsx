import React, { useEffect, useState } from "react";
import "./mainComponentstyles.css";

const Scroller = () => {
  const [scroller, setScroller] = useState({
    scrollTop: 0,
    scrollerHeight: 0
  });

  const handleScroll = () => {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

    scrollTop =
      (scrollTop * 100) / (document.body.offsetHeight - window.innerHeight);

    console.log(scrollTop, scroller.scrollerHeight);
    //scrollTop = scrollTop - ((scroller.scrollerHeight*scrollTop)/100)

    setScroller({
      ...scroller,
      scrollTop
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("USE EFFECT")
    setScroller({
      ...scroller,
      scrollerHeight: (window.innerHeight * 100) / document.body.offsetHeight
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("SCROLLER", scroller.scrollerHeight)

  return (
    <div className="scroller-inner-container">
      <div
        className="scroller"
        style={{
          top: scroller.scrollTop + "%",
          height: scroller.scrollerHeight + "%"
        }}
      ></div>
    </div>
  );
};

export default Scroller;
