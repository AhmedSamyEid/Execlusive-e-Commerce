import Horesider from "../ui/Horesidar";
import Sidbar from "../ui/Sidbar";
import Flashsales from "../ui/Flashsales"
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
    
    
    </div>
  );
}
