import { Cog, MoveRight } from "lucide-react";

export default function FalseHome() {
  return (
    <div>
      <div className="ml-10 ">
        <span className="flex md:flex-col">
          <div className="text-white font-serif text-6xl mb-2 mt-5 ">
            <p>Починай вчитись</p>
            <p>online без напрягу</p>
          </div>

          <span className="text-white/50 text-lg">
            <p>
              In amicus vita, lux et terra nobis veritatem revelant. Aqua vitae
              et silva
            </p>
            <p>
              creant vitam et fortunam. Tempus vincit omnia, rex naturae. Ignis
              et
            </p>
            <p>oculus artem et finem manifestant. Mors est pars vitae, sed</p>
            <p>salus est astra spectare. Carpe diem in bello vitae.</p>
          </span>

          <div className="flex gap-3 mt-5 text-lg">
            <button className="flex items-center justify-center gap-2 bg-white font-semibold w-52 h-10 rounded-lg hover:bg-white/5 hover:border hover:border-white hover:text-white duration-300">
              <p>Почати</p>
              <MoveRight className="mt-1" size={20} />
            </button>

            <button
              className="flex items-center justify-center gap-2 bg-indigo-700/60
            font-semibold w-52 h-10 rounded-lg  text-white/90
            hover:bg-indigo-700/90 duration-200"
            >
              <Cog size={23} />
              <p>Як працює?</p>
            </button>
          </div>
        </span>
      </div>
    </div>
  );
}
