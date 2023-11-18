import Link from "next/link";

export default function TrueHome() {
  return (
    <div className="flex justify-center">
      <Link href="/home">
        <button className="px-8 items-center text-white m-4 flex justify-between border border-white w-[650px] h-[180px]">
          <span className="w-1/4">
            <img src="/diary.png" alt="Diary" className="w-[120px] h-[120px]" />
          </span>
          <span className="w-3/4">
            <p className="text-7xl">Diary</p>
          </span>
        </button>
      </Link>
    </div>
  );
}
