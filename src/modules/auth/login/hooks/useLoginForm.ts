import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { LoginTypes } from "../types/LoginTypes";
import { SubmitHandler, useForm } from "react-hook-form";
export function useLoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>();
  const handleLogin: SubmitHandler<LoginTypes> = (data) => {
    const { email, password } = data;
    const storedUsers = localStorage.getItem("Users");
    const users: LoginTypes[] = storedUsers ? JSON.parse(storedUsers) : [];
    const matchedUser = users.find((user: LoginTypes) => user.emilorphone === email && user.password === password);
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
  return {
    register,
    handleSubmit,
    errors,
    handleLogin,
  };
}
