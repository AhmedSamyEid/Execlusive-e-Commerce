import { t } from "i18next";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Login() {

  const navigate = useNavigate();

  function handleLogin(data: { email: string; password: string }) {
    const { email, password } = data;

    const users = JSON.parse(localStorage.getItem("Users") || "[]");

    const matchedUser = users.find(
      (user : any) =>
        user.emilorphone === email && user.password === password
    );

    if (matchedUser) {
      alert("✅ Login successful!");
      localStorage.setItem("LoggedInUser", JSON.stringify(matchedUser));

    
        navigate("/");
    } else {
      alert("❌ Invalid email/phone or password.");
    }

  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-md rounded-md overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-blue-50">
          <img
            src="/images/dl.beatsnoop 1.png"
            alt="Login Illustration"
            className="w-full h-auto object-contain p-8"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-1">
            {t("Log in to")}{" "}
            <span className="text-red-500">{t("Exclusive")}</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            {t("Enter your details below")}
          </p>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <input
              type="text"
              placeholder={t("Email or Phone Number")}
              {...register("email", { required: "يجب كتبة الايميل" })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            <p className="text-red-600 font-bold">
              {typeof errors?.email?.message === "string"}
            </p>
            <input
              type="password"
              placeholder={t("Password")}
              {...register("password", { required: "يجب كتبة كلمة السر" })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            <p className="text-red-600 font-bold">
              {typeof errors?.email?.message === "string"}
            </p>
            <div className="flex items-center justify-between mt-2">
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
              >
                {t("Log In")}
              </button>
              <a href="#" className="text-red-500 text-sm hover:underline">
                {t("Forget Password?")}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
