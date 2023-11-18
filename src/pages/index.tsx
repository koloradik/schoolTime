import FalseHome from "@/components/header/home/FalseHome";
import TrueHome from "@/components/header/home/TrueHome";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return <div>{!session ? <TrueHome /> : <FalseHome />}</div>;
}
