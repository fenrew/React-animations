import React, { useEffect } from "react";
import "../Scrollbar-borderbox-shadow/importTheseStyles.css";

import Scroller from "../Scrollbar-borderbox-shadow/Scroller";

const MainContainer = () => {
  useEffect(() => {
    document.getElementsByTagName("body")[0].className = "body-no-scrollbar";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Scroller />
      <div>
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "red",
            position: "relative"
          }}
        >
          <div style={{height: "20vh"}}></div>
          <div
            id="small-scroll-div"
            className="body-no-scrollbar"
            style={{
              height: "40vh",
              width: "30vw",
              margin: "0 auto",
              overflowY: "scroll",
              position: "relative"
            }}
          >
            <div
              style={{
                height: "100vh",
                backgroundImage: "linear-gradient(red, yellow)",
                width: "100%"
              }}
            ></div>
            {/* <Scroller /> */}
          </div>
        </div>
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "yellow" }}
        ></div>
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "cyan" }}
        ></div>
      </div>
    </div>
  );
};

export default MainContainer;
