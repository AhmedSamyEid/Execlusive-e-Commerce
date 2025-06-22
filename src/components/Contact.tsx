import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    toast.success("Your message has been saved successfully! 🎉");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      <ToastContainer position="top-right" autoClose={3000} />
    
      <div className="bg-white shadow rounded p-6 w-full lg:w-1/3 space-y-6">
        <div>
          <div className="text-red-500 text-2xl mb-2">📞</div>
          <h3 className="font-bold text-lg">Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <div>
          <div className="text-red-500 text-2xl mb-2">✉️</div>
          <h3 className="font-bold text-lg">Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: customer@exclusive.com</p>
          <p>Email: support@exclusive.com</p>
        </div>
      </div>

    
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded p-6 w-full lg:w-2/3 space-y-4 border "
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone *"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded w-full h-40"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
