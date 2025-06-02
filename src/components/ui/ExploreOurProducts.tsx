import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Product {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
}

interface CartItem extends Product {
  qty: number;
  priceNumber: number;
}

export default function ExploreOurProducts() {
  const { t } = useTranslation();

  const Products: Product[] = [
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
      alt: "Curology Product Set",
      title: "Curology Product Set",
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
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 768) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(3);
      else setVisibleCount(8);
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

  const handleAddToCart = (item: Product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
    
        const updatedCart = prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
        return updatedCart;
      } else {
        return [
          ...prevCart,
          {
            ...item,
            qty: 1,
            priceNumber: Number(item.price.replace("$", "")),
          },
        ];
      }
    });
  };

  return (
    <div className="p-8 mt-12">
      <h2 className="mb-10 text-4xl font-bold text-center">
        {t("Explore Our Products")}
      </h2>

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevSlide}
          className="p-2 border rounded-full hover:bg-gray-200"
          aria-label={t("Previous")}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 border rounded-full hover:bg-gray-200"
          aria-label={t("Next")}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center gap-6 flex-wrap overflow-hidden transition-all duration-500 ease-in-out">
        {Products.slice(startIndex, startIndex + visibleCount).map((item) => (
          <div
            key={item.id}
            className="group border bg-yellow-50 p-4 rounded-lg w-[270px] relative overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              className="w-full h-40 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
              src={item.src}
              alt={item.alt}
            />
            <h4 className="font-semibold mb-1">{t(item.title)}</h4>

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

    
      <div className="mt-12 pt-6">
        
        {cart.length === 0 ? (
          <p></p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-2 flex justify-between">
                <span>{t(item.title)} x {item.qty}</span>
                <span>${(item.priceNumber * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          {t("View All Products")}
        </button>
      </div>
    </div>
  );
}
