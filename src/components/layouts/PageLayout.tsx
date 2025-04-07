import { Outlet } from "react-router";
import Banner from "./Banner";



export default function PageLayout() {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
}
