import React from "react";

const page = () => {
  return (
    <main
      className={
        "relative bg-yellow-700 md:bg-transparent flex-col w-screen h-screen flex  justify-center items-center "
      }
    >
      <img
        src="/Artboard 1-1.png"
        alt=""
        className="absolute hidden md:block top-0 left-0 -z-10 w-full h-full"
      />
      <div className="relative z-50 w-[65%] h-[50%] mt-1 font-got text-2xl font-bold text-white   md:absolute top-0 md:mt-48">
        Welcome to Catalyst, hosted at Lovely Professional University, the
        dynamic fusion of technology and innovation. Catalyst is not just a
        celebration but a competition that ignites student technological
        Innovation, offering a platform designed to transcend traditional
        boundaries. Our mission is rooted in the belief that by synchronizing
        efforts and fostering a spirit of competitive excellence, we
        cancontributet o the betterment of society.In 2024, Catalyst aims to
        explore the non-existent, challenging participants to push the limits of
        what is known and embark on a journey of discovery and innovation. Join
        us in shaping the future at Catalyst, where technology and innovation
        converge to create an unparalleled competitive experience, one
        innovation at a time!
      </div>
    </main>
  );
};

export default page;
