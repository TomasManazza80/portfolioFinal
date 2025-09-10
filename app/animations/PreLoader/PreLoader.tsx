"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";

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
      
      <style jsx>{`
        .preloader {
          height: 100vh;
          width: 100%;
          background: #0e1016;
          color: #e4ded7;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden !important;
        }

        .texts-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 60px;
        }

        @media (min-width: 640px) {
          .texts-container {
            gap: 12px;
          }
        }

        .preloader-name-line {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (min-width: 640px) {
          .preloader-name-line {
            gap: 12px;
          }
        }

        .preloader-ceo-line {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .preloader-text {
          display: inline-block;
          font-size: 14px;
          font-weight: 800;
          color: #e4ded7;
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 640px) {
          .preloader-text {
            font-size: 16px;
          }
        }

        @media (min-width: 768px) {
          .preloader-text {
            font-size: 18px;
          }
        }

        @media (min-width: 1024px) {
          .preloader-text {
            font-size: 20px;
          }
        }

        .preloader-subtext {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #9ca3af;
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 640px) {
          .preloader-subtext {
            font-size: 14px;
          }
        }

        @media (min-width: 768px) {
          .preloader-subtext {
            font-size: 16px;
          }
        }

        @media (min-width: 1024px) {
          .preloader-subtext {
            font-size: 18px;
          }
        }

        .texts-container.animated {
          opacity: 1;
        }

        .preloader-text.animated, .preloader-subtext.animated {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default PreLoader;