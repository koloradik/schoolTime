import { User2 } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Account() {
  const session = useSession();

  return (
    <>
      {!session ? (
        <button
          className="transition-all text-white/95 border-white border w-9 h-9 rounded-full flex justify-center items-center hover:bg-purple-800 text-lg mr-6 duration-200
      "
        >
          I
        </button>
      ) : (
        <div className="group flex">
          <button className="flex group-hover:hidden text-white/95 border-white border w-9 h-9 rounded-full justify-center duration-200 items-center text-lg mr-1">
            <User2 />
          </button>

          <div className="hidden group-hover:flex text-white/95 bg-white w-60 h-60 rounded-md justify-center text-lg mr-1 mt-52">
            <p className="text-black font-semibold">Авторизація</p>
            <User2 className="w-24 h-24 text-black border-[6px] border-black rounded-full" />
            <button></button>
          </div>
        </div>
      )}
    </>
  );
}
