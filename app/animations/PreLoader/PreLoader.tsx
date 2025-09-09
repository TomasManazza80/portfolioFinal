"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./PreLoader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <div className="preloader-name-line">
          <span className="preloader-text">TOMÁS</span>
          <span className="preloader-text">MANAZZA</span>
          <span className="preloader-text">|</span>
          <span className="preloader-text">DEVELOPER</span>
        </div>
        
        <div className="preloader-ceo-line">
          <span className="preloader-subtext">CEO</span>
          <span className="preloader-subtext">of</span>
          <span className="preloader-subtext">EMPTY</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;