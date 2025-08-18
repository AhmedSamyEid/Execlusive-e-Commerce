import { useState } from "react";
import { useNavigate } from "react-router";
import { SignupTypes } from "../types/signupTypes";

export function useSignupForm() {
  const navigate = useNavigate();
  const [Users, setUser] = useState<SignupTypes[]>(JSON.parse(localStorage.getItem("Users") || "[]"));
  const [formInputs, setFormInputs] = useState<SignupTypes>({
    firstName: "",
    lastName: "",
    Name: "",
    emilorphone: "",
    password: "",
    address: "",
    order: [],
    revision: [],
    collection: [],
  });

  function signup() {
    const updatedUsers = [...Users, formInputs];
    setUser(updatedUsers);
    localStorage.setItem("Users", JSON.stringify([...Users, formInputs]));
    setFormInputs({
      ...formInputs,
      Name: "",
      emilorphone: "",
      password: "",
    });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    signup();
    navigate("/login");
  }
  return {
    handleSubmit,
    formInputs,
    setFormInputs,
  };
}
