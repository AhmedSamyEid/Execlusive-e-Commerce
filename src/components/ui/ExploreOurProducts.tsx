import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ExploreOurProducts() {
  const { t } = useTranslation();
  const Products = [
    {
      id: 1,
      src: "/images/dog_food.png",
      alt: "dog_food",
      title: "Breed Dry Dog Food",
      price: "$100",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 2,
      src: "/images/camera.png",
      alt: "camera",
      title: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 3,
      src: "/images/labtop.png",
      alt: "labtop",
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 4,
      src: "/images/Curology_Product_Set.png",
      alt: "Curology Product Set ",
      title: "Curology Product Set ",
      price: "$500",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 5,
      src: "/images/Kids_Car.png",
      alt: "Kids Electric Car",
      title: "Kids Electric Car",
      price: "$960",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 6,
      src: "/images/Copa_Sense.png",
      alt: "Jr. Zoom Soccer Cleats",
      title: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 7,
      src: "/images/PlayStation_arm_2.png",
      alt: "GP11 Shooter USB Gamepad",
      title: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 8,
      src: "/images/jacket.png",
      alt: "Quilted Satin Jacket",
      title: "Quilted Satin Jacket",
      price: "$660",
      rating: 4.2,
      reviews: 78,
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 9;

  const nextSlide = () => {
    if (startIndex + visibleCount < Products.length) {
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
      <h2 className="mb-10 text-4xl">{t("Explore Our Products")}</h2>
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
        <div className="flex justify-center gap-4 flex-wrap space-x-4 overflow-hidden ">
          {Products.slice(startIndex, startIndex + visibleCount).map((item) => (
            <div
              key={item.id}
              className="border bg-yellow-50 p-4 rounded-md my-10 w-[270px] relative"
            >
              <img
                className="w-full h-40 object-contain mb-3"
                src={item.src}
                alt={item.alt}
              />
              <h4> {t(item.title)}</h4>
              <div className="text-lg font-bold text-red-600">{item.price}</div>
              <div className="text-sm text-yellow-500">
                ⭐⭐⭐⭐⭐⭐ {item.rating} ({item.reviews})
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-600">
            {t("View All Products")}
          </button>
        </div>
      </div>
    </>
  );
}
