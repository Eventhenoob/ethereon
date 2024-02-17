"use client";
import Door from "@/components/Door";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

const page = () => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowText(true);
    }, 5 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!showText && <Door />}

      <main
        className={
          "w-screen overflow-hidden h-screen flex justify-center items-center "
        }
      >
        <div
          className={
            "w-full h-full flex justify-center items-center " + style["default"]
          }
        >
          <img
            src="/Untitled.jpg"
            alt="dragon bg"
            className="-z-10 block absolute top-0 object-cover left-0 w-full h-full "
          />
          {
            <div
              className={
                "  w-full h-full relative bg-opacity-25 flex justify-center items-center gap-10 transition-all duration-700 " +
                (showText ? " opacity-100 scale-100 " : " scale-125 opacity-0")
              }
            >
              <img
                src="/front.jpg"
                alt=""
                className="absolute top-0 pt-44  w-2/4 lg:w-1/4"
              />
            </div>
          }
        </div>
      </main>
    </>
  );
};

export default page;
