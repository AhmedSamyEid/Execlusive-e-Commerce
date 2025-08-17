import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Sidebar() {
  const { t } = useTranslation();

  const sidebarLinks = [
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Men’s Fashion"), path: "/" },
    { name: t("Electronics"), path: "/" },
    { name: t("Home & Lifestyle"), path: "/" },
    { name: t("Medicine"), path: "/" },
    { name: t("Sports & Outdoor"), path: "/" },
    { name: t("Baby’s & Toys"), path: "/" },
    { name: t("Groceries & Pets"), path: "/" },
    { name: t("Health & Beauty"), path: "/" },
  ];

  return (
    <div className="hidden md:block border-r border-gray-300 md:min-w-[200px] p-4">
      <ul className="space-y-4">
        {sidebarLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
