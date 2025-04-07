import { Link } from "react-router";

export default function Banner () {
  return(
    <section className=" bg-black text-white h-[48px]">
      <div className="container m-auto  flex items-center justify-center gap-5 text[14px]">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <Link to={"/"}>ShopNow</Link>
      </div>
    </section>
  );
}