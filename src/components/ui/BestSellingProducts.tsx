import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Product = {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviews: number;
};

export default function BestSellingProducts() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const products: Product[] = [
    {
      id: 1,
      src: "/images/shirt.png",
      alt: "shirt",
      title: "The north coat",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      src: "/images/bag.png",
      alt: "bag",
      title: "Gucci duffle bag",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 3,
      src: "/images/graphics_card.png",
      alt: "graphics card",
      title: "RGB liquid CPU Cooler",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 4,
      src: "/images/small_bookself.png",
      alt: "bookshelf",
      title: "Small BookSelf",
      price: "$260",
      oldPrice: "$360",
      rating: 4.5,
      reviews: 88,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 768) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = targetDate.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = getTimeRemaining();
      setTimeLeft(updatedTime);
      if (updatedTime.total <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (item: Product) => {
    const stored: Product[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updated = [...stored, item];
    localStorage.setItem("cartItems", JSON.stringify(updated));
    navigate("/cart");
  };

  return (
    <div className="p-4 sm:p-8 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl sm:text-4xl text-center sm:text-left">
          {t("Best Selling Products")}
        </h2>
        <div className="space-x-2">
          <button onClick={prevSlide} className="p-2 border rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="p-2 border rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap overflow-hidden">
        {products.slice(startIndex, startIndex + visibleCount).map((item) => (
          <div
            key={item.id}
            className="border bg-yellow-50 p-3 rounded-md w-full sm:w-[230px] group"
          >
            <img
              src={item.src.trim()}
              alt={item.alt}
              className="w-full h-40 object-contain mb-3"
            />
            <h4 className="font-semibold text-sm sm:text-base">
              {t(item.title)}
            </h4>
            <div className="text-xs text-gray-500 line-through">
              {item.oldPrice}
            </div>
            <div className="text-base font-bold text-red-600">{item.price}</div>
            <div className="text-sm text-yellow-500">
              ⭐ {item.rating} ({item.reviews})
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-3 w-full bg-black text-white py-1 rounded cursor-pointer transition
              "
            >
              {t("Add to Cart")}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm sm:text-base">
          {t("View All Products")}
        </button>
      </div>

      <section className="bg-gradient-to-r from-black to-gray-900 text-white mt-20 p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="w-full lg:max-w-xl space-y-4 text-center lg:text-left">
          <span className="text-2xl sm:text-3xl text-[#00ff66] uppercase tracking-widest">
            {t("Categories")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold">
            {t("Enhance Your Music Experience")}
          </h2>

          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            {["Hours", "Days", "Minutes", "Seconds"].map((label, i) => {
              const value = [timeLeft.hours, timeLeft.days, timeLeft.minutes, timeLeft.seconds][i];
              return (
                <div key={label} className="text-center">
                  <div className="text-xl font-bold">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase">{t(label)}</div>
                </div>
              );
            })}
          </div>

          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded text-sm sm:text-base">
            {t("Buy Now!")}
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src="/images/earphone.png"
            alt="speaker"
            className="w-full max-h-[300px] object-contain mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
