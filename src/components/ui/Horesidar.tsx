import { useState } from "react";

const sidbasrs = [
  { src: "/images/DesktopAR_4.png", alt: "slider" },
  { src: "/images/1168x384AR.png", alt: "slider" },
  { src: "/images/DesktopAR_3.png", alt: "slider" },
  { src: "/images/572x250AR_1.png", alt: "slider" },
  { src: "/images/slider.png", alt: "slider" },
  { src: "/images/572x250AR.png", alt: "slider" },
  { src: "/images/572x250AR_3.png", alt: "slider" },
  { src: "/images/572x250AR_2.png", alt: "slider" },
];

export default function Horesidar() {
  const [currentIndex, setCurrentIndex] = useState(Math.trunc(sidbasrs.length / 2));

  function pagantion(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="w-full max-w-full px-2 sm:px-4">
      <div className="relative overflow-hidden">
        <div className="flex transition-all duration-500">
          <div className="w-full">
            <img
              src={sidbasrs[currentIndex].src}
              alt={sidbasrs[currentIndex].alt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-3 left-0 w-full flex justify-center gap-2">
          {sidbasrs.map((_, index) => (
            <div
              key={index}
              onClick={() => pagantion(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentIndex === index
                  ? "bg-red-500 border border-white"
                  : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
