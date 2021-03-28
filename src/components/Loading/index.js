import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <Loader
      type="Plane"
      color="#00BFFF"
      height={10}
      width={10}
      timeout={3000}
      style={{ position: "absolute", top: "25%", left: "25%" }}
    />
  );
};

export default Loading;
