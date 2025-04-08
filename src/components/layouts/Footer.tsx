import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const {t} =useTranslation ();
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Exclusive */}
        <div>
          <h2 className="text-xl font-bold mb-4">{t ("Exclusive")}</h2>
          <p className="mb-2">{t ("Subscribe")}</p>
          <p className="text-sm mb-4">{t ("Get 10% off your first order")}</p>
          <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 text-sm outline-none w-full"
            />
            <button className="bg-white text-black px-3 py-2 text-sm font-semibold">
              ➤
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-bold mb-4">{t("Support")}</h2>
          <p className="text-sm mb-2">{("111 Bijoy sarani, Dhaka")}</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-lg font-bold mb-4">{t("Account")}</h2>
          <ul className="text-sm space-y-2">
            <li>{t("My Account")}</li>
            <li>{("Login / Register")}</li>
            <li>{t("Cart")}</li>
            <li>{("Wishlist")}</li>
            <li>{t("Shop")}</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-lg font-bold mb-4">{t("Quick Link")}</h2>
          <ul className="text-sm space-y-2">
            <li>{t("Privacy Policy")}</li>
            <li>{t("Terms Of Use")}</li>
            <li>{t("FAQ")}</li>
            <li>{t("Contact")}</li>
          </ul>
        </div>

        {/* App Download */}
        <div className="container" >
          <h2 className="text-lg font-bold mb-4">{t("Download App")}</h2>
          <p className="text-sm mb-2">{t("Save $3 with App New User Only")}</p>
        <div className="img flex gap-2">
          <img
            src="/images/Qrcode 1.png"
            alt="QR Code"
            className="w-20 "
          />
          <div className="gap-2">
            <img src="/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo (1).png" alt="Google Play" className="w-24" />
          
            <img src="/images/AppStore.png" alt="App Store" className="w-24" />
          </div>
          
          </div>
        </div>
        <div className="flex gap-4 mt-4 lg:mt-0">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-6 flex flex-col lg:flex-row justify-center items-center text-sm">
        <p>© {t("Copyright Rimel 2022. All right reserved")}</p>
      </div>
    </footer>
  );
}
