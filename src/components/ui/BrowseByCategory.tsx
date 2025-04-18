export default function BrowseByCategory() {
  const categories = [
    {
      src: "/icons/Category-CellPhone.png",
      alt: "Category-CellPhone",
      description: "Phones",
    },
    {
      src: "/icons/Category-Computer.png",
      alt: "Category-Computer",
      description: "Computers",
    },
    {
      src: "/icons/Category-SmartWatch.png",
      alt: "Category-SmartWatch",
      description: "Smart Watches",
    },
    {
      src: "/icons/Vector.png",
      alt: "Category-Vector",
      description: "Accessories",
    },
    {
      src: "/icons/Category-Headphone.png",
      alt: "Category-Headphone",
      description: "Headphones",
    },
  ];

  return (
    <div className="m-20">
      <h2 className="mb-10 text-4xl">Browse By Category</h2>
      <div className="flex justify-around items-center flex-wrap gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border-2 border-black hover:bg-red-500 cursor-pointer w-40 h-40 bg-yellow-50 flex flex-col items-center justify-center p-4 rounded-md"
          >
            <img src={item.src} alt={item.alt} className="w-full h-15 object-contain" />
            <h3 className="text-center mt-2">{item.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
