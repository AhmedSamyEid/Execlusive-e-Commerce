import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface User {
  src: string;
  alt: string;
  description: string;
  name: string;
}

interface Category {
  src: string;
  alt: string;
  number: string;
  description: string;
}

export default function About() {
  const { t } = useTranslation();

  const users: User[] = [
    {
      src: "/images/Frame 874.png",
      alt: "Founder",
      description: "Founder & Chairman",
      name: "Tom Cruise",
    },
    {
      src: "/images/image 51.png",
      alt: "Managing",
      description: "Managing Director",
      name: "Emma Watson",
    },
    {
      src: "/images/will_Smith.png",
      alt: "Designer",
      description: "Product Designer",
      name: "Will Smith",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(users.length / 2)
  );

  const categories: Category[] = [
    {
      src: "/icons/Services.png",
      alt: "Services",
      number: "10.5k",
      description: "Sallers active our site",
    },
    {
      src: "/icons/Services (1).png",
      alt: "Sales",
      number: "33k",
      description: "Monthly Product Sale",
    },
    {
      src: "/icons/Services (2).png",
      alt: "Customers",
      number: "45.5k",
      description: "Customer active in our site",
    },
    {
      src: "/icons/Services (3).png",
      alt: "Gross",
      number: "25k",
      description: "Annual gross sale in our site",
    },
  ];

  return (
    <>
      <nav className="m-10 text-gray-600 text-sm">
        <Link to="/" className="hover:underline">
          {t("Home")}
        </Link>{" "}
        /
        <Link to="/about" className="hover:underline ml-1">
          {t("About")}
        </Link>
      </nav>

      <section className="m-20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-11">
          <div className="md:w-1/2">
            <h1 className="font-bold text-5xl mb-6">{t("Our Story")}</h1>
            <p className="text-lg mb-4 leading-relaxed text-gray-700">
              {t(
                "Launched in 2015, Exclusive is South Asia’s premier online   shopping marketplace with an active presence in Bangladesh."
              )}
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Exclusive offers a diverse assortment in categories ranging from
              consumer electronics to fashion.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src="/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
              alt="Our Story"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="my-20">
          <div className="flex justify-center flex-wrap gap-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="border-2 border-black hover:bg-red-400 transition p-6 bg-yellow-50 rounded-md w-64 text-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-16 mx-auto object-contain"
                />
                <span className="text-3xl font-bold mt-4 block">
                  {item.number}
                </span>
                <h3 className="mt-2 text-gray-700">{t(item.description)}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] text-center">
            <img
              src={users[currentIndex].src}
              alt={users[currentIndex].alt}
              className="w-full h-[397px] object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">
              {t(users[currentIndex].name)}
            </h2>
            <h3 className="text-gray-600">
              {t(users[currentIndex].description)}
            </h3>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <ul className="flex gap-3">
            {users.map((_, index) => (
              <li
                key={index}
                className={`w-4 h-4 rounded-full cursor-pointer transition ${
                  index === currentIndex
                    ? "bg-red-500 border-2 border-white"
                    : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center mt-32">
          <div>
            <img
              src="/icons/3.png"
              alt="Free Delivery"
              className="mx-auto mb-4"
            />
            <h4 className="font-semibold">{t("FREE AND FAST DELIVERY")}</h4>
            <p className="text-sm text-gray-600">
              {t("Free delivery for all orders over $140")}
            </p>
          </div>
          <div>
            <img
              src="/icons/1.png"
              alt="24/7 Support"
              className="mx-auto mb-4"
            />
            <h4 className="font-semibold">{t("24/7 CUSTOMER SERVICE")}</h4>
            <p className="text-sm text-gray-600">
              {t("Friendly 24/7 customer support")}
            </p>
          </div>
          <div>
            <img src="/icons/2.png" alt="Money Back" className="mx-auto mb-4" />
            <h4 className="font-semibold">{t("MONEY BACK GUARANTEE")}</h4>
            <p className="text-sm text-gray-600">
              {t("We return money within 30 days")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
