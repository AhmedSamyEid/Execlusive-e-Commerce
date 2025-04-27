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
  const [currentIndex, setCurrentIndex] = useState(
    Math.trunc(sidbasrs.length / 2)
  );
  function pagantion(index: number) {
    setCurrentIndex(index);
  }

  return (
    <>
      <div className="m-7 flex justify-center  w-[100%]">
        <div className="wrapper relative ">
          <div className="sliders relative  flex overflow-hidden ">
            {sidbasrs.map(() => {
              return (
                <div className="sider h-[400px] min-w-[100%] p-2">
                  <img
                    className="  min-w-[100%]"
                    src={sidbasrs[currentIndex].src}
                    alt={sidbasrs[currentIndex].alt}
                  />
                </div>
              );
            })}
          </div>
          <div className="absolute w-full bottom-5">
            <ul className="flex items-center justify-center gap-2 ">
              {sidbasrs.map((_, index) => {
                return (
                  <li
                    className={` ${
                      index === currentIndex
                        ? "border-2 border-white bg-red-500"
                        : ""
                    }flex w-[17px] h-[17px] mr-3 mb-2 rounded-full bg-[#808080] cursor-pointer`}
                    onClick={() => pagantion(index)}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
