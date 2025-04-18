export default function BrowseByCategory() {
  const Browse = [
    {
      src: "/icons/Category-CellPhone.png",
      alt: "Category-CellPhone",
      Description: "Phones",
    },
    {
      src: "/icons/Category-Computer.png",
      alt: "Category-CellPhone",
      Description: "Phones",
    },
    {
      src: "/icons/Category-SmartWatch.png",
      alt: "Category-CellPhone",
      Description: "Phones",
    },
    {
      src: "/icons/Vector.png",
      alt: "Category-CellPhone",
      Description: "Phones",
    },
    {
      src: "/icons/Category-Headphone.png",
      alt: "Category-CellPhone",
      Description: "Phones",
    },
  ];

  return (
    <>
    <div className="m-20">
    <h2 className="mb-20 ml-25 ">Browse By Category</h2>
      <div className=" flex  justify-around">
        {Browse.map((item, index) => (
          <div className="border-2 border-black hover:bg-red-500 cursor-pointer w-40 h-40 bg-yellow-50" key={index}>
            <img src={item.src} alt={item.alt} />
            <h3>{item.Description}</h3>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
