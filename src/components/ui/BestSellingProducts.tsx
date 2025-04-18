import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BestSellingProducts() {
  const { t } =useTranslation();
  const produsts = [
    {
      id: 1,
      src: "/public/images/shirt.png ",
      alt: "bag",
      title: "The north coat",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 1,
      src: "/public/images/bag.png ",
      alt: "bag",
      title: "Gucci duffle bag",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 1,
      src: "/public/images/graphics_card.png ",
      alt: "bag",
      title: "RGB liquid CPU Cooler",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 1,
      src: "/public/images/small_bookself.png ",
      alt: "bag",
      title: "Small BookSelf",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7;

  const nextSlide = () => {
    if (startIndex + visibleCount < produsts.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <>
      <div className="p-8 mt-30 ">
        <div className="flex  justify-between items-center mb-4">
          <h2 className="text-4xl ml-14">{t("Best Selling Products")}</h2>
          <div className="space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 cursor-pointer border rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 cursor-pointer border rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-wrap space-x-4 overflow-hidden gap-15  ">
          {produsts.slice(startIndex, startIndex + visibleCount).map((item) => (
            <div
              key={item.id}
              className="border bg-yellow-50 p-4 rounded-md w-[230px] relative"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-40 object-contain mb-3"
              />
              <h4 className="font-semibold">{t(item.title)}</h4>
              <div className="text-sm text-gray-500 line-through">
                ${item.oldPrice}
              </div>
              <div className="text-lg font-bold text-red-600">
                ${item.price}
              </div>
              <div className="text-sm text-yellow-500">
                ⭐ {item.rating} ({item.reviews})
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-600">
            {t("View All Products")}
          </button>
        </div>
        <section className="bg-gradient-to-r from-black to-gray-900 text-white mt-40 ml-5 px-10 py-12 flex items-center justify-between">
          <div className="max-w-xl space-y-6 ">
            <span className=" text-3xl text-[#00ff66] px-3 py-1 rounded-full uppercase tracking-widest">
            {t("Categories")}
            </span>
            <h2 className="text-4xl font-bold leading-snug">
            {t("  Enhance Your  Music Experience")}
            </h2>

            <div className="flex space-x-4 mt-6 ">
              <div className="text-center ">
                <div className="text-2xl font-bold">23</div>
                <div className="text-xs uppercase">{t("Hours")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">05</div>
                <div className="text-xs uppercase">{t("Days")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">59</div>
                <div className="text-xs uppercase">{t("Minutes")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">35</div>
                <div className="text-xs uppercase">{t("Seconds")}</div>
              </div>
            </div>

            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded">
            {t("Buy Now!")}
            </button>
          </div>

          <div className="w-1/2">
            <img
              src="/images/earphone.png"
              alt="speaker"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      </div>
    </>
  );
}
