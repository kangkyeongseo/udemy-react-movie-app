import React from "react";

const Loader = ({ type }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 26, fontWeight: "lighter" }}>
        {type === "search" ? "Search Movie" : "Loading..."}
      </span>
    </div>
  );
};

export default Loader;
