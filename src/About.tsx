import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
export default function About() {
  const { t } = useTranslation();
  const users = [
{src : "/images/Frame 874.png" , alt : "Frame" , description : "Founder & Chairman", name : "Tom Cruise" },
{src : "/images/image 51.png" , alt : "Frame" ,description : "Managing Director", name : "Emma Watson" },
{src : "/images/will_Smith.png" , alt : "Frame" ,description : "Product Designer", name : "Will Smith" },
  ];
    const [currentIndex, setCurrentIndex] = useState(Math.trunc(users.length / 2 ));
    function pagantion (index : number) {
      setCurrentIndex(index);
    }
  const categories = [
    {
      src: "/icons/Services.png",
      alt: "Services",
      number: "10.5k",
      description: "Sallers active our site",
    },
    {
      src: "/icons/Services (1).png",
      alt: "Services (1)",
      number: "33k",
      description: "Mopnthly Produduct Sale",
    },
    {
      src: "/icons/Services (2).png",
      alt: "Category-SmartWatch",
      number: "45.5k",
      description: "Customer active in our site",
    },
    {
      src: "/icons/Services (3).png",
      alt: "Category-Vector",
      number: "25k",
      description: "Anual gross sale in our site",
    },
  ];

  return (
    <>
      <ul className="m-10">
        <Link to="/">{t("Home")}</Link> /<Link to="/about">{t("About")}</Link>
      </ul>
      <section className="m-20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-11">
          <div className="md:w-1/2">
            <h1 className="font-Inter text-5xl mb-6">Our Story</h1>
            <p className="text-lg mb-6 leading-relaxed">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-lg leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from consumer.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <img
              src="/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
              alt="user"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="m-20">
          <div className="flex justify-around items-center flex-wrap gap-11">
            {categories.map((item, index) => (
              <div
                key={index}
                className="border-2 border-black hover:bg-red-400 cursor-pointer w-55 h-50 bg-yellow-50 flex flex-col items-center justify-center p-4 rounded-md"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className=" w-full h-15 object-contain"
                />
                <br />
                <span className="text-3xl">{item.number}</span>
                <h3 className="text-center mt-2">{t(item.description)}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-20 mt-10">
  {users.map((item ) => (
    <div
    
      className="w-[294px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
    >
      <img
        className="w-full h-[397px] object-cover rounded-md mb-4"
        src={users[currentIndex].src}
        alt={users[currentIndex].alt}
      />
      <h2 className="text-xl font-semibold mb-2">{t(item.name)}</h2>
      <h3 className="text-gray-600">{t(item.description)}</h3>
    </div>
  ))}
</div>
<div className="absolute w-full mt-20 right-5">
<ul  className="flex items-center justify-center gap-5 ">
  {users.map((_ , index)=>{
    return(
    <li className={` ${index === currentIndex ? "border-2 border-white bg-red-500" : "" }flex w-[15px] h-[15px]  rounded-full bg-[#808080] cursor-pointer`} onClick={()=> pagantion(index)}>
    </li>
    );
    
    
  })} 
    </ul>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center mt-40">
        <div>
          <img src="/icons/3.png" alt="Free Delivery" className="mx-auto my-4 " />
          <h4 className="font-semibold">{t("FREE AND FAST DELIVERY")}</h4>
          <p className="text-sm">{t("Free delivery for all orders over $140")}</p>
        </div>
        <div>
          <img src="/icons/1.png" alt="24/7 Support" className="mx-auto mb-3  " />
          <h4 className="font-semibold">{t("24/7 CUSTOMER SERVICE")}</h4>
          <p className="text-sm">{t("Friendly 24/7 customer support")}</p>
        </div>
        <div>
          <img src="/icons/2.png" alt="Money Back" className="mx-auto mb-3  " />
          <h4 className="font-semibold">{t("MONEY BACK GUARANTEE")}</h4>
          <p className="text-sm">{t("We return money within 30 days")}</p>
        </div>
      </div>
      </section>
    </>
  );
}
