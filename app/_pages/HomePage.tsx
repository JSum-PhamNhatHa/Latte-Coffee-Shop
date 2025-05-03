'use client'

import Image from "next/image";
import DemoBranding from '../../images/Brand-Demo.jpg';
import CoffeeDemo1 from '../../images/cf sua.jpg';
import Card from "../_components/Card";

export default function HomePage() {
  return (
    <>
      {/* =================================================== */}
      <div className="flex h-[65vh] max-h-1/2">
        <Image
          src={DemoBranding}
          alt="Lá-tte Quán"
          className="w-1/2"
        />
        <div className="flex flex-col justify-center">
          <h1 className="mx-3">Lá-tte</h1>
          <p className="mx-3 text-4xl font-light">Chạm vị cà phê Việt</p>
        </div>
      </div>
      {/* =================================================== */}
      <div className="flex h-[65vh] max-h-1/2 bg-[#a2af7f]">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="mx-3 text-[#f3f3e3]">Chào mừng đến với Lá-tte</h1>
          <p className="mx-3 text-2xl font-light text-[#f3f3e3]">Nơi hội tụ hương vị cà phê việt</p>
          <p className="mx-3 text-base font-light text-[#f3f3e3]">Khám phá thế giới cà phê độc đáo với Lá-tte.</p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            src={DemoBranding}
            alt="Lá-tte Quán"
            className="h-[75%] w-[85%] rounded-2xl"
          />
        </div>
      </div>
      {/* =================================================== */}
      <div className="h-[65vh] max-h-1/2">
        <div>
          <h1 className="mx-3">Thưởng thức cà phê</h1>
          <p className="mx-3 text-2xl font-light">Khám phá hương vị đặc trưng của Lá-tte</p>
        </div>
        <div>
          <Card imageSrc={CoffeeDemo1} imageAlt="Cà phê sữa đá" />
        </div>
      </div>
      {/* =================================================== */}
    </>
  );
}