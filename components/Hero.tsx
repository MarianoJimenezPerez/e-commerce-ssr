"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Los mejores descuentos están aquí</h1>
        <p className="hero__subtitle">
          Explora la más amplia variedad de productos para tu setup
        </p>
        <CustomButton
          title="Comienza ahora"
          containerStyles="bg-red-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image
              src={"/hero.png"}
              alt="Teclado Horus Redragon"
              fill
              className="object-contain"
            />
            <div className="hero__image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
