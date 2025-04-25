import { useState } from "react";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    localStorage.setItem("contactFormData", JSON.stringify(formData));

    alert("✅ تم حفظ البيانات بنجاح!");

  
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

  
        <div className="bg-white p-8 rounded-md shadow-md space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <i className="fas fa-phone-alt text-red-500 text-xl"></i>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Call To Us</h2>
              <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-800 font-medium">Phone: +8801611112222</p>
            </div>
          </div>
          <hr />
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <i className="fas fa-envelope text-red-500 text-xl"></i>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Write To US</h2>
              <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-800 font-medium">Emails: customer@exclusive.com</p>
              <p className="text-gray-800 font-medium">support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 ring-red-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 ring-red-400"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 ring-red-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 bg-gray-100 rounded-md resize-none outline-none focus:ring-2 ring-red-400"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
