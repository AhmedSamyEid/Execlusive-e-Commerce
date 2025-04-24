import Sidbar from "../ui/Sidbar";
import Horesider from "../ui/Horesidar";
import Flashsales from "../ui/Flashsales"
import BrowseByCategory from "../ui/BrowseByCategory"
import BestSellingProducts from "../ui/BestSellingProducts"
import ExploreOurProducts from "../ui/ExploreOurProducts"
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
