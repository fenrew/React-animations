import React from "react";

const NoScroll = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ }}>
        <div style={{ height: "100vh", width: "100%", backgroundColor: "red" }}>
            <h1>NO SCROLL</h1>
          <div
          className="small-container"
            style={{
              height: "40vh",
              width: "30vw",
              float: "right",
              overflowY: "scroll"
            }}
          >
            <div
              style={{
                height: "100vh",
                backgroundImage: "linear-gradient(red, yellow)",
                width: "100%"
              }}
            ></div>
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

export default NoScroll;
