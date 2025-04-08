import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Banner ({changeLanguage , local}:{changeLanguage:(language :string)=> void ,local:string}) {
  const { t } =useTranslation();
  return(
    <section className=" bg-black text-white h-[48px]">
      <div className="container m-auto  flex items-center justify-center gap-5 text[14px]">
        <span>
            {t("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")}
        </span>
        <Link to={"/"}></Link>
      <select value={local} onChange={(e) => changeLanguage(e.target.value)} className="text-white bg-black outline-0" >
        <option value={"en"}>English</option>
        <option value={"ar"}>العريبه</option>
      </select>
      </div>
    </section>
  );
}