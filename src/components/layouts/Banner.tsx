import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface BannerProps {
  changeLanguage: (language: string) => void;
  local: string;
}

export default function Banner({ changeLanguage, local }: BannerProps) {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white h-[48px] w-full">
      <div className="container mx-auto flex items-center justify-around gap-5 text-[14px]">
        <span className="text-center">
          {t(
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          )}
        </span>
        <Link to={"/"}></Link>
        <select
          value={local}
          onChange={(e) => changeLanguage(e.target.value)}
          className="text-white bg-black outline-0 border border-white px-2 py-1 rounded mt-1.5 cursor-pointer "
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </section>
  );
}
