import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type User = {
  emilorphone: string;
  password: string;
  name?: string;
  email?: string;
  phone?: string;
};


type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const handleLogin: SubmitHandler<LoginFormInputs> = (data) => {
    const { email, password } = data;


    let users: User[] = [];
    try {
      const storedUsers = localStorage.getItem("Users");
      users = storedUsers ? (JSON.parse(storedUsers) as User[]) : [];
    } catch (error) {
      console.error("Error parsing stored users:", error);
      toast.error(t("❌ Error reading user data."));
      return;
    }

  
    const matchedUser = users.find(
      (user) => user.emilorphone === email && user.password === password
    );

    if (matchedUser) {
      toast.success(t("✅ Login successful!"));
      localStorage.setItem("LoggedInUser", JSON.stringify(matchedUser));
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error(t("❌ Invalid email/phone or password."));
    }
  };

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
              {...register("email", { required: t("Email or phone is required") })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            {errors.email && (
              <p className="text-red-600 font-bold">{errors.email.message}</p>
            )}

            <input
              type="password"
              placeholder={t("Password")}
              {...register("password", { required: t("Password is required") })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            {errors.password && (
              <p className="text-red-600 font-bold">{errors.password.message}</p>
            )}

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
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}
