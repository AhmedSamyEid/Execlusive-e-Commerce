
import CartPage from "../ui/CartPage";
import Horesider from "../ui/Horesidar";
import Sidbar from "../ui/Sidbar";
export default function Home() {
  return (
    <div className="flex">
    <div className="container ">
      <Sidbar />
      <Horesider />
      <CartPage />
    </div>
    
    </div>
  );
}
