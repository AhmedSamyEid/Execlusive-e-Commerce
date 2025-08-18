import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useLoginForm } from "../hooks/useLoginForm";
export default function Login() {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, handleLogin } = useLoginForm();
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-md rounded-md overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-blue-50">
          <img src="/images/dl.beatsnoop 1.png" alt="Login Illustration" className="w-full h-auto object-contain p-8" />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-1">
            {t("Log in to")} <span className="text-red-500">{t("Exclusive")}</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6">{t("Enter your details below")}</p>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <input
              type="text"
              placeholder={t("Email or Phone Number")}
              {...register("email", { required: t("Email or phone is required") })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            {errors.email && <p className="text-red-600 font-bold">{errors.email.message}</p>}

            <input
              type="password"
              placeholder={t("Password")}
              {...register("password", { required: t("Password is required") })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            {errors.password && <p className="text-red-600 font-bold">{errors.password.message}</p>}

            <div className="flex items-center justify-between mt-2">
              <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                {t("Log In")}
              </button>
              <a href="#" className="text-red-500 text-sm hover:underline">
                {t("Forget Password?")}
              </a>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}
