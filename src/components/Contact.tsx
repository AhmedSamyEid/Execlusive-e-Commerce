import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  phone: string; 
  message: string;
};

const ContactSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("❗ الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setSuccessMessage("✅ تم حفظ البيانات بنجاح!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="p-5 sm:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
        <div className="bg-white p-6 sm:p-8 rounded-md shadow-md space-y-8">
      
        </div>

      
        <div className="bg-white p-6 sm:p-8 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">{t("Send us a Message")}</h2>

          {successMessage && (
            <p className="text-green-600 mb-4 font-medium">{successMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("Your Name *")}
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 ring-red-400 w-full"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("Your Email *")}
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 ring-red-400 w-full"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("Your Phone *")}
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 ring-red-400 w-full"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("Your Message")}
                rows={6}
                className="w-full p-4 bg-gray-100 rounded-md resize-none outline-none focus:ring-2 ring-red-400"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
              >
                {t("Send Message")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
