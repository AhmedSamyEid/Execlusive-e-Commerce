import Sidbar from "../ui/Sidbar";
import Flashsales from "../ui/Flashsales"
import Horesider from "../ui/Horesidar";
import BrowseByCategory from "../ui/BrowseByCategory"
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
    
    </div>
  );
}
