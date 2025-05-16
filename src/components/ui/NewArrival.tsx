import { useTranslation } from "react-i18next";

export default function NewArrival() {
  const { t } = useTranslation();

  const items = [
    {
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: "/images/playstation.png",
      colSpan: "lg:col-span-2",
    },
    {
      title: "Women’s Collections",
      description: "Featured women collections that give you another vibe.",
      image: "/images/attractive-woman-wearing-hat-posing-black-background.png",
    },
    {
      title: "Speakers",
      description: "Amazon wireless speakers.",
      image: "/images/speakers.png",
    },
    {
      title: "Perfume",
      description: "GUCCI INTENSEOUD EDP",
      image: "/images/perfume.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center sm:text-left">
        {t("New Arrival")}
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative bg-black text-white rounded-xl p-4 ${
              item.colSpan ? item.colSpan : ""
            }`}
          >
            <img
              src={item.image}
              alt={t(item.title)}
              className="w-full h-60 object-contain opacity-60 mb-4"
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold">{t(item.title)}</h3>
              <p className="text-sm mb-2">{t(item.description)}</p>
              <button className="mt-2 cursor-pointer text-white px-4 py-1 rounded text-sm">
                {t("Shop Now")}
              </button>
            </div>
          </div>
        ))}
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-12">
        <div>
          <img
            src="/icons/3.png"
            alt="Free Delivery"
            className="mx-auto my-4 w-16 h-16 object-contain"
          />
          <h4 className="font-semibold">{t("FREE AND FAST DELIVERY")}</h4>
          <p className="text-sm">{t("Free delivery for all orders over $140")}</p>
        </div>
        <div>
          <img
            src="/icons/1.png"
            alt="24/7 Support"
            className="mx-auto my-4 w-16 h-16 object-contain"
          />
          <h4 className="font-semibold">{t("24/7 CUSTOMER SERVICE")}</h4>
          <p className="text-sm">{t("Friendly 24/7 customer support")}</p>
        </div>
        <div>
          <img
            src="/icons/2.png"
            alt="Money Back"
            className="mx-auto my-4 w-16 h-16 object-contain"
          />
          <h4 className="font-semibold">{t("MONEY BACK GUARANTEE")}</h4>
          <p className="text-sm">{t("We return money within 30 days")}</p>
        </div>
      </div>
    </div>
  );
}
