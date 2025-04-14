import { useState } from "react";
import { useTranslation } from "react-i18next";

interface User {
  firstName?: string;
  lastName?: string;
  Name: string;
  emilorphone: string;
  password: string;
  address?: string;
  order?: [];
  revision?: [];
  collection?: [];
}

export default function Signup() {
  const { t } = useTranslation();

  const [user, setUser] = useState<User[]>(
    JSON.parse(localStorage.getItem("User") || "[]")
  );

  const [formInputs, setFormInputs] = useState<User>({
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
    const newUsers = [...user, formInputs];
    setUser(newUsers);
    localStorage.setItem("User", JSON.stringify(newUsers));

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
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-md rounded-md overflow-hidden">
        
        <div className="hidden md:flex items-center justify-center bg-blue-100">
          <img 
            src="/images/dl.beatsnoop 1.png"
            alt="Shopping Illustration"
            className="w-full h-auto object-contain p-6"
          />
        </div>

        <div className="p-8 w-full">
          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your details below</p>
  
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              value={formInputs.Name}
              onChange={(e)=> setFormInputs({...formInputs, Name: e.target.value})}
              type="text"
              placeholder={t("Name")}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={formInputs.emilorphone}
              onChange={(e)=> setFormInputs({...formInputs, emilorphone: e.target.value})}
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={formInputs.password}
              onChange={(e)=> setFormInputs({...formInputs, password: e.target.value})}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Create Account
            </button>
  
            <div className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded cursor-pointer hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Google Icon"
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">Sign up with Google</span>
            </div>
          </form>
  
          <div className="text-center mt-6 text-sm text-gray-600">
            Already have account?{' '}
            <a href="#" className="text-black font-medium hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
