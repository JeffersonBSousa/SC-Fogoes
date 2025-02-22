import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contato() {
   return (
      <div>
         <Navbar />
         <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20">
            <div className="lg:w-1/3 px-4 text-xl lg:text-3xl items-center flex overflow-hidden">
               <p className="text-center px-6 sm:px-20 lg:px-0">A <span className="font-bold">SC FOGÕES</span> é uma assistência técnica especializada em serviços, revisões e manutenções de fogões, através do seu trabalho promove qualidade segurança e confiança. Com olhar humanizado e moderno atende desde residências até grande empresas.</p>
            </div>
            <div className="flex justify-center items-center">
               <Image
                  loading="lazy"
                  src="/img/ScFogoesSobre.jpeg"
                  alt="Sc fogoes"
                  width={520}
                  height={520}
                  className="lg:w-96 lg:h-96 xl:w-full xl:h-full"
               />
            </div>
         </div>
         
         <Footer />
      </div>
   )
}