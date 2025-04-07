import { Link } from "react-router";

export default function Banner () {
  return(
    <section className=" bg-black text-white h-[48px]">
      <div className="container m-auto  flex items-center justify-center gap-5 text[14px]">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <Link to={"/"}>ShopNow</Link>
      <select className="text-white bg-black outline-0" value={"en"}>
        <option value={"en"}>English</option>
        <option value={"en"}>العريبه</option>
      </select>
      </div>
    </section>
  );
}