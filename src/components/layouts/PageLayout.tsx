import { Outlet } from "react-router";
import Banner from "./Banner";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";



export default function PageLayout() {
    const {i18n } = useTranslation();
  const [local , setLocal] =useState (localStorage.getItem("i18nextLng") || "en"); 

  function changeLanguage (language:string) :void{
  switch (language){
    case "ar":
    i18n.changeLanguage ("ar");
    setLocal ("ar");
    break;
    default:
    i18n.changeLanguage ("en");
    setLocal ("en");
    break;
  }
}
  return (
    <div dir={local === "ar" ? "rtl" : "ltr"}>
      <Banner changeLanguage={changeLanguage} local={local} />
      <Header />
        <Outlet />
      <Footer />
    
    </div>
  );
}