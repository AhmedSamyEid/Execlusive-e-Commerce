import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("❗الرجاء ملء جميع الحقول المطلوبة");
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
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <img src="/icons/icons-phone.png" alt="Phone Icon" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">{t("Call To Us")}</h2>
              <p className="text-gray-600">{t("We are available 24/7, 7 days a week.")}</p>
              <p className="text-gray-800 font-medium">{t("Phone: +8801611112222")}</p>
            </div>
          </div>
          <hr />
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <img src="/icons/icons-mail.png" alt="Mail Icon" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">{t("Write To US")}</h2>
              <p className="text-gray-600">{t("Fill out our form and we will contact you within 24 hours.")}</p>
              <p className="text-gray-800 font-medium">
                <a href="mailto:customer@exclusive.com" className="text-red-500 hover:underline">
                  customer@exclusive.com
                </a>
              </p>
              <p className="text-gray-800 font-medium">
                <a href="mailto:support@exclusive.com" className="text-red-500 hover:underline">
                  support@exclusive.com
                </a>
              </p>
            </div>
          </div>
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
