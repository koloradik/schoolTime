import { User2 } from "lucide-react";
import { useSession } from "next-auth/react";
import * as HoverCard from "@radix-ui/react-hover-card";

export default function Account() {
  const session = useSession();

  return (
    <>
      {!session ? (
        <button
          className="transition-all duration-200 text-white/95 border-white border w-9 h-9 rounded-full flex justify-center items-center hover:bg-purple-800 text-lg mr-6
      "
        >
          I
        </button>
      ) : (
        // <div className="group flex">
        //   <button className="flex group-hover:hidden text-white/95 border-white border w-9 h-9 rounded-full justify-center duration-200 items-center text-lg mr-1">
        //     <User2 />
        //   </button>
        //   <button className="flex text-white/95 border-white border w-9 h-9 rounded-full justify-center duration-200 items-center text-lg mr-1">
        //   <User2 />
        // </button>
        // </div>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <button>asdasdasdasd</button>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="hidden group-hover:flex w-60 h-96 hover:bg-white rounded-md duration-500 bg-white/5 mr-1 justify-center items-center">
              <button className="flex items-center justify-center gap-2 bg-white font-semibold w-52 h-10 rounded-lg hover:bg-white/5 hover:border hover:border-white hover:text-white hover:bg-slate-700 duration-300">
                <p>Google</p>
              </button>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      )}
    </>
  );
}
