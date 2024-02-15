import { useState } from "react";
import style from "./style.module.css";
import Link from "next/link";
interface Props {
  img: string;
  title: string;
  price: string;
  isFree: boolean;
  onClick: () => void;
  id: string;
}
/* Share, Explore, Register */
const Shield = ({ onClick, img, title, price, id, isFree }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className={style["shield"]}>
          <div className={style["shieldFront"]}></div>
          <div
            className={
              style["shieldBack"] + " flex flex-col justify-center items-center"
            }
          >
            <div className="w-[75%] h-56  relative  flex justify-center  items-end rounded-xl">
              <img
                src={img}
                className="object-fill absolute -z-10 mt- rounded-bl-3xl rounded-br-3xl h-full w-full "
                alt="no img found!"
              />
              <div className="flex gap-2 mt-5">
                <Link
                  href={`/events/${id}`}
                  className="px-4 py-2 bg-[#ffd342] text-white font-bold rounded-md hover:bg-yellow-400 transition-all text-sm duration-150"
                >
                  Register Now
                </Link>

                <button
                  className="px-4 py-2 bg-[#dfa43b] font-bold text-white rounded-md hover:bg-yellow-400 transition-all duration-150 "
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                  }}
                >
                  Explore
                </button>
              </div>
            </div>

            <p className="font-got mt-4 text-white font-bold  text-2xl bg-green-400 p-2 rounded-lg ">
              {!isFree ? price + " rupee" : "Free"}
            </p>
          </div>
        </div>
        <div className="h-20 w-72">
          <img src="/tags/ai-tag.png" alt="" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Shield;
