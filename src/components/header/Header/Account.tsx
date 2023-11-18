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
            <div className="group">
              <button className="group-data-[state=open]:invisible">
                asdasdasdasd
              </button>
            </div>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="flex flex-col bg-yellow-200 px-6">
              <button className="">
                <p>Google</p>
              </button>
              <button className="">
                <p>Google</p>
              </button>
              <button className="">
                <p>Google</p>
              </button>
              <button className="">
                <p>Google</p>
              </button>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      )}
    </>
  );
}
