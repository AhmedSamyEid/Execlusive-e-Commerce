import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FlashSales() {
  const { t } = useTranslation();
  const Flash = [
    { id: 1, src: "/images/PlayStation_arm.png", alt : "PlayStation_arm", title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, rating: 4.5, reviews: 88 },
    { id: 2, src: "/images/PlayStation_arm_2.png",alt : "Geams", title: "HAVIT", price: 960, oldPrice: 1160, discount: 35, rating: 4.0, reviews: 75 },
    { id: 3, src: "/images/keyboard.png", alt : "AK-900 Wired Keyboard", title: "AK-900 Wired Keyboard", price: 370, oldPrice: 400, discount: 30, rating: 4.6, reviews: 99 },
    { id: 4, src: "/images/screen.png", alt : "screen",  title: "IPS LCD Gaming Monitor", price: 375, oldPrice: 400, discount: 25, rating: 4.3, reviews: 82 },
    { id: 5, src: "/images/chair.png",alt : "chair" , title: "S-Series Comfort Chair ", price: 375, oldPrice: 400, discount: 25, rating: 4.2, reviews: 78 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7;

  const nextSlide = () => {
    if (startIndex + visibleCount < Flash.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="p-8 mt-30 ">
      <div className="flex  justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{t("Flash Sales")}</h2>
        <div className="space-x-2">
          <button onClick={prevSlide} className="p-2 cursor-pointer border rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="p-2 cursor-pointer border rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap space-x-4 overflow-hidden ">
        {Flash.slice(startIndex, startIndex + visibleCount).map((item) => (
          <div key={item.id} className="border bg-yellow-50 p-4 rounded-md w-[230px] relative">
            <span className="absolute top-2 left-2  bg-red-500 text-white px-2 text-xs rounded">
              -{item.discount}%
            </span>
            <img src={item.src} alt={item.alt} className="w-full h-40 object-contain mb-3" />
            <h4 className="font-semibold">{t(item.title)}</h4>
            <div className="text-sm text-gray-500 line-through">${item.oldPrice}</div>
            <div className="text-lg font-bold text-red-600">${item.price}</div>
            <div className="text-sm text-yellow-500">⭐ {item.rating} ({item.reviews})</div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-600">
          {t("View All Products")}
        </button>
      </div>
    </div>
  );
}
