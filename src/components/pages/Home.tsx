import Sidbar from "../ui/Sidbar";
import Horesider from "../ui/Horesidar";
import Flashsales from "../../modules/auth/flashSales/components/Flashsales"
import BrowseByCategory from "../ui/BrowseByCategory"
import BestSellingProducts from "../../modules/auth/bestSellingProducts/components/BestSellingProducts"
import ExploreOurProducts from "../../modules/auth/exploreOur/components/ExploreOurProducts"
import NewArrival from "../ui/NewArrival"

export default function Home() {
  return (
    <div className="">
    <div className="flex container m-auto  ">
      <Sidbar />
      <Horesider />
    </div>
    <div className="m-auto">
        <Flashsales />
    </div>
    <div>
      <BrowseByCategory />
    </div>
    <div>
      <BestSellingProducts />
    </div>
    <div>
      <ExploreOurProducts />
    </div>
    <div>
      <NewArrival />
    </div>
    </div>
  );
}
