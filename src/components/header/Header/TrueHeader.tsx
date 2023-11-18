import Account from "./Account";
import Burger from "./Burger";

export default function TrueHeader() {
  return (
    <div className="w-full h-20 flex justify-between items-center">
      <Burger />
      <p className=" text-white/95 h-full text-4xl font-semibold flex justify-center items-center">
        SchoolTime
      </p>
      <Account />
    </div>
  );
}
