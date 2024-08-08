import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="h-[calc(100vh-14rem)] flex items-center justify-center gap-24 border-b-2">
        <img className="w-1/3" src="/images/Hero.webp" />
        <div className="flex flex-col gap-8">
          <div className="text-7xl font-bold text-orange-600">Hello!</div>
          <div className="text-5xl text-black leading-tight">
            I'm Paritosh, a<br /> FullStack Developer
            <br /> based in Mumbai.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Hero;
