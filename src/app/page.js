import Image from "next/image";
import Full_Stack from './images/Full_Stack.png';

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen w- full justify-items-center items-center">
      <p class="text-left text-2xl ">PORTAFOLIO</p>
      <div>
        <Image src={Full_Stack} width={600} height={600}/>
          <div class="px-6 py-4">
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>

          <button className="p-5 bg-red 500 text-white rounded-xl hover:bg-red-600 transition-all w-1/6">DESCARGAR CV</button>
      </div>
    </main>
  );
}
