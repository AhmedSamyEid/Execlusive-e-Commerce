import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Product {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
}

export default function FlashSales() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Flash: Product[] = [
    {
      id: 1,
      src: "/images/PlayStation_arm.png",
      alt: "PlayStation_arm",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      src: "/images/PlayStation_arm_2.png",
      alt: "Geams",
      title: "HAVIT",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: 4.0,
      reviews: 75,
    },
    {
      id: 3,
      src: "/images/keyboard.png",
      alt: "AK-900 Wired Keyboard",
      title: "AK-900 Wired Keyboard",
      price: 370,
      oldPrice: 400,
      discount: 30,
      rating: 4.6,
      reviews: 99,
    },
    {
      id: 4,
      src: "/images/screen.png",
      alt: "screen",
      title: "IPS LCD Gaming Monitor",
      price: 375,
      oldPrice: 400,
      discount: 25,
      rating: 4.3,
      reviews: 82,
    },
    {
      id: 5,
      src: "/images/chair.png",
      alt: "chair",
      title: "S-Series Comfort Chair ",
      price: 375,
      oldPrice: 400,
      discount: 25,
      rating: 4.2,
      reviews: 78,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleAddToCart = (item: Product) => {
    const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updated = [...stored, item];
    localStorage.setItem("cartItems", JSON.stringify(updated));
    navigate("/cart");
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t("Flash Sales")}</h2>
        <div className="space-x-2">
          <button onClick={prevSlide} className="p-2 border rounded-full hover:bg-gray-200">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="p-2 border rounded-full hover:bg-gray-200">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden justify-center flex-wrap">
        {Flash.slice(startIndex, startIndex + visibleCount).map((item) => (
          <div key={item.id} className="border bg-yellow-50 p-4 rounded-md w-[230px] relative group">
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 text-xs rounded">
              -{item.discount}%
            </span>
            <img src={item.src} alt={item.alt} className="w-full h-40 object-contain mb-3" />
            <h4 className="font-semibold">{t(item.title)}</h4>
            <div className="text-sm text-gray-500 line-through">${item.oldPrice}</div>
            <div className="text-lg font-bold text-red-600">${item.price}</div>
            <div className="text-sm text-yellow-500">⭐ {item.rating} ({item.reviews})</div>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-3 w-full bg-black text-white py-1 rounded transition
              "
            >
              {t("Add to Cart")}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          {t("View All Products")}
        </button>
      </div>
    </div>
  );
}
