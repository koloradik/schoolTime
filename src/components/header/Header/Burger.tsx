import { Menu } from "lucide-react";

export default function Burger() {
  return (
    <button
      className="transition-all duration-200 text-white/95 border-white border w-9 h-9 rounded-lg flex justify-center items-center ml-6
   text-lg mr-6 hover:bg-white hover:text-black"
    >
      <Menu size={24} />
    </button>
  );
}
