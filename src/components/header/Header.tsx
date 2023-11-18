import { useSession } from "next-auth/react";
import TrueHeader from "./Header/TrueHeader";
import FalseHeader from "./Header/FalseHeader";

export default function Header() {
  const session = useSession();

  return <div>{!session ? <TrueHeader /> : <FalseHeader />}</div>;
}
