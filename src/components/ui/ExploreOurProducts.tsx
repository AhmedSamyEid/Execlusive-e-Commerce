import { useEffect, useState } from "react";
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
  const [visibleCount, setVisibleCount] = useState(4);


  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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

  const handleAddToCart = (item) => {
    console.log("تمت الإضافة إلى السلة:", item);
  };

  return (
    <div className="p-8 mt-30">
      <h2 className="mb-10 text-4xl">{t("Explore Our Products")}</h2>
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevSlide} className="p-2 border rounded-full">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="p-2 border rounded-full">
          <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center gap-4 flex-wrap overflow-hidden">
        {Products.slice(startIndex, startIndex + visibleCount).map((item) => (
          <div
            key={item.id}
            className="group border bg-yellow-50 p-4 rounded-md w-[270px] relative overflow-hidden"
          >
            <img
              className="w-full h-40 object-contain mb-3"
              src={item.src}
              alt={item.alt}
            />
            <h4 className="font-semibold">{t(item.title)}</h4>
            <div className="text-lg font-bold text-red-600">{item.price}</div>
            <div className="text-sm text-yellow-500">
              ⭐ {item.rating} ({item.reviews})
            </div>

            <button
              onClick={() => handleAddToCart(item)}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300"
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