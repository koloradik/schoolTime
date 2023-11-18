import Account from "./Account";
import Burger from "./Burger";

export default function FalseHeader() {
  return (
    <div className="w-full h-20 flex justify-between items-center">
      <p className=" text-white/95 h-full text-4xl font-semibold flex justify-center items-center pl-4">
        SchoolTime
      </p>
      <span className="flex justify-center items-center">
        <Account />
        <Burger />
      </span>
    </div>
  );
}
