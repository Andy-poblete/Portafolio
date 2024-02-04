import Image from "next/image";
import Link from "next/link";
import gif from './images/gif.gif'
import Full_Stack from './images/Full_Stack.png';

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen w- full justify-items-center items-center p-5">
      <div className="text-3xl">
        <p className="text- p-5">PORTAFOLIO ANDY POBLETE</p>
        <Image src={gif} width={500} height={500} />
      </div>
      <div className="mt-28">
        <Image src={Full_Stack} width={600} height={500} />
        <div class="px-6 py-4">
          <p class=" text-base">
            Desarrollador web (full stack) con conocimientos en Html, Css, Javascript, React , Express, APIS con Express y Base de Datos no sql. Con interés de seguir aprendiendo nuevos lenguajes de programación para aumentar el conocimiento.
          </p>
        </div>
      </div>
      
        <Link className="p-5  rounded-xl hover:bg-red-600 border-solid border-2 border-white" href="./document/CV-Andy.pdf" download={true}>DESCARGAR
          
        </Link>
      
    </main>
  );
}
