import React from "react";

const Hero = () => {
  return (
    <header className="h-screen flex flex-col text-center justify-center items-center gap-8">
      <h1 className="text-headlineBig">Hello Randy</h1>
      <h2 className="text-headlineSmall uppercase text-primaryColor">
        Welcome to the internet!
      </h2>
    </header>
  );
};

export default Hero;
