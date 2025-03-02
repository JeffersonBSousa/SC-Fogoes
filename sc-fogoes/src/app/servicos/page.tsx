import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Contato() {
   return (
      <div className="overflow-hidden">
         <Navbar />
         <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
            <div className="flex justify-center items-center">
               <Image
                  loading="lazy"
                  src="/img/instalaçao.jpeg"
                  alt="Sc fogoes"
                  width={520}
                  height={520}
                  className="lg:w-96 xl:w-[520px]"
               />
            </div>
            <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
               <p className="font-bold  text-2xl">INSTALAÇÃO</p>
               <p className="font-semibold">Instalamos qualquer marca e modelo</p>
               <p className="text-center">Realizamos a instalação do seu fogão seguindo rigorosamente todas as normas de segurança, garantindo um serviço de alta qualidade e o uso seguro no dia a dia. Antes de iniciar, verificamos todos os acessórios para assegurar uma instalação precisa. Após a conclusão, realizamos testes completos para garantir o perfeito funcionamento. Além disso, permanecemos à disposição para qualquer necessidade ou eventualidade.</p>
            </div>
         </div>
         <div className="w-full bg-blue-950 text-white">
            <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
               <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
                  <p className="font-bold text-2xl">Manutenção</p>
                  <p className="font-semibold">Fazemos manutenção em qualquer marca e modelo</p>
                  <p className="text-center">Realizamos a manutenção do seu fogão com total segurança e qualidade, seguindo rigorosamente todas as normas técnicas. Antes de iniciar o serviço, realizamos uma inspeção completa para identificar possíveis ajustes ou reparos necessários. Após a manutenção, testamos todos os componentes para garantir o funcionamento seguro e eficiente. Além disso, permanecemos à disposição para qualquer eventualidade.</p>
               </div>
               <div className="flex justify-center items-center">
                  <Image
                     loading="lazy"
                     src="/img/manutençao.avif"
                     alt="Sc fogoes"
                     width={520}
                     height={520}
                     className="lg:w-96 xl:w-[520px]"
                  />
               </div>
            </div>
         </div>
         <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
            <div className="flex justify-center items-center">
               <Image
                  loading="lazy"
                  src="/img/industrial.jpeg"
                  alt="Sc fogoes"
                  width={520}
                  height={520}
                  className="lg:w-96 xl:w-[520px]"
               />
            </div>
            <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
               <p className="font-bold  text-2xl">Manutenção industrial</p>
               <p className="font-semibold">Fazemos manutenção em equipamentos industriais</p>
               <p className="text-center">Realizamos a manutenção de fogões, fornos e equipamentos similares para cozinhas industriais com total segurança e excelência, seguindo todas as normas técnicas</p>
            </div>
         </div>
         <div className="w-full bg-blue-950 text-white">
            <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
               <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
                  <p className="font-bold  text-2xl">Conversão</p>
                  <p className="font-semibold">Fazemos conversão para diferentes tipos de gás</p>
                  <p className="text-center">Realizamos a conversão de fogões para gás natural e gás GLP com total segurança e qualidade, seguindo todas as normas técnicas. Antes do serviço, realizamos uma avaliação detalhada para garantir a compatibilidade e o correto ajuste dos componentes. Após a conversão, testamos o equipamento para assegurar um funcionamento eficiente e seguro.</p>
               </div>
               <div className="flex justify-center items-center">
                  <Image
                     loading="lazy"
                     src="/img/conversao.jpeg"
                     alt="Sc fogoes"
                     width={520}
                     height={400}
                     className="lg:w-96 xl:w-[520px] "
                  />
               </div>
            </div>
         </div>
         <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
            <div className="flex justify-center items-center">
               <Image
                  loading="lazy"
                  src="/"
                  alt="Sc fogoes"
                  width={520}
                  height={520}
                  className="lg:w-96 xl:w-[520px]"
               />
            </div>
            <div className="lg:w-1/3 px-4 flex flex-col items-center lg:items-start gap-4">
               <p className="font-bold  text-2xl">Instalação de medidor</p>
               <p className="font-semibold">Fazemos instação de medidor de gás</p>
               <p className="text-center">Realizamos a instalação de medidores de gás com total segurança e excelência, seguindo todas as normas técnicas. Antes da instalação, verificamos a compatibilidade do sistema e a necessidade de ajustes. Após a conclusão, realizamos testes rigorosos para garantir o funcionamento preciso e seguro.</p>
            </div>
         </div>
         <Footer />
      </div>

   )
}