import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Sidbar() {
  const {t} = useTranslation();
  const sidbarLink= [
    {name: t("Woman’s Fashion") , path: "/" },
    {name: t("Men’s Fashion") , path: "/" },
    {name: t("Electronics") , path: "/" },
    {name: t("Home & Lifestyle") , path: "/" },
    {name: t("Medicine") , path: "/" },
    {name: t("Sports & Outdoor") , path: "/" },
    {name: t("Baby’s & Toys") , path: "/" },
    {name: t("Groceries & Pets") , path: "/" },
    {name: t("Health & Beauty") , path: "/" },
  ];
  return(
    <>
    
    <div className="border-r-2 broder-gray-500 md:min-w-[200px]">
      <ul>
{sidbarLink.map((link , index)=>(<li className="my-4" key={index}> 
  <Link to={link.path}>{link.name}</Link>
</li>
))}
</ul>
    </div>
    </>
  );
}