import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <div>
      <div className="bg-blue-950">
        <div className="relative z-10">
          <Navbar />
          <h3 className="mt-10 mx-6 xl:mt-24 2xl:mt-32 text-center font-bold text-2xl lg:text-4xl text-white">
            SINTA-SE À VONTADE PARA ENTRAR EM CONTATO CONOSCO
          </h3>
          <div className="text-white 2xl:mb-56 max-w-screen-2xl mx-auto justify-center gap-20 flex flex-col lg:flex-row mt-10 xl:mt-24 2xl:mt-32 p-6">
            <div className="lg:w-2/5 xl:w-1/3 flex flex-col gap-5 bg-black bg-opacity-70 p-6 rounded-lg">
              <h3 className="font-bold lg:text-3xl">ENTRE EM CONTATO</h3>
              <Link
                href="tel:+558331427333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Image
                  src="/svg/Telephone.svg"
                  width={32}
                  height={20}
                  loading="lazy"
                  alt="Telefone para contato"
                />
                <span className="font-semibold lg:text-2xl">
                  (83) 3142-7333
                </span>
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=5583988005001&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Image
                  src="/svg/WhatsApp.png"
                  width={35}
                  height={10}
                  loading="lazy"
                  alt="Whatsapp"
                />
                <span className="font-semibold lg:text-2xl">
                  (83) 98800-5001
                </span>
              </Link>
              <Link
                href="mailto:scfogoes@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Image
                  src="/svg/email.svg"
                  width={35}
                  height={35}
                  loading="lazy"
                  alt="Email"
                />
                <span className="font-semibold lg:text-2xl">
                  scfogoes@gmail.com
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/scfogao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Image
                  src="/svg/instagram.png"
                  width={35}
                  height={24}
                  loading="lazy"
                  alt="Instagram"
                />
                <span className="font-semibold lg:text-2xl">@scfogões</span>
              </Link>
            </div>
            <div className="lg:w-2/5 xl:w-1/3 flex flex-col gap-5 bg-black bg-opacity-70 p-6 rounded-lg lg:text-2xl">
              <div>
                <h3 className="font-semibold lg:text-3xl mb-3">
                  HORÁRIO DE FUNCIONAMENTO
                </h3>
                <p>Segunda-feira - Sexta-feira, 08:00 - 17:30</p>
                <p>Sábado, 08:00 - 12:00</p>
              </div>
              <div>
                <h3 className="font-semibold lg:text-3xl mb-3">
                  NOSSO ENDEREÇO
                </h3>
                <p>
                  Av maria rosa 1470 sala 10, Manaira, João Pessoa-PB, Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full max-h-[1000px] overflow-hidden z-0">
          <video
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full z-0"
          >
            <source src="/movie/videochama.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
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
          <p className="text-center lg:text-start">
            Realizamos a instalação do seu fogão seguindo rigorosamente todas as
            normas de segurança, garantindo um serviço de alta qualidade e o uso
            seguro no dia a dia. Antes de iniciar, verificamos todos os
            acessórios para assegurar uma instalação precisa. Após a conclusão,
            realizamos testes completos para garantir o perfeito funcionamento.
            Além disso, permanecemos à disposição para qualquer necessidade ou
            eventualidade.
          </p>
        </div>
      </div>
      <div className="w-full bg-blue-950 text-white">
        <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
          <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
            <p className="font-bold text-2xl">Manutenção</p>
            <p className="font-semibold">
              Fazemos manutenção em qualquer marca e modelo
            </p>
            <p className="text-center lg:text-start">
              Realizamos a manutenção do seu fogão com total segurança e
              qualidade, seguindo rigorosamente todas as normas técnicas. Antes
              de iniciar o serviço, realizamos uma inspeção completa para
              identificar possíveis ajustes ou reparos necessários. Após a
              manutenção, testamos todos os componentes para garantir o
              funcionamento seguro e eficiente. Além disso, permanecemos à
              disposição para qualquer eventualidade.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              loading="lazy"
              src="/img/manutenção.webp"
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
            src="/img/industrial.webp"
            alt="Sc fogoes"
            width={520}
            height={520}
            className="lg:w-96 xl:w-[520px]"
          />
        </div>
        <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
          <p className="font-bold  text-2xl">Manutenção industrial</p>
          <p className="font-semibold">
            Fazemos manutenção em equipamentos industriais
          </p>
          <p className="text-center lg:text-start">
            Realizamos a manutenção de fogões, fornos e equipamentos similares
            para cozinhas industriais com total segurança e excelência, seguindo
            todas as normas técnicas
          </p>
        </div>
      </div>
      <div className="w-full bg-blue-950 text-white">
        <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
          <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
            <p className="font-bold  text-2xl">Conversão</p>
            <p className="font-semibold">
              Fazemos conversão para diferentes tipos de gás
            </p>
            <p className="text-center lg:text-start">
              Realizamos a conversão de fogões para gás natural e gás GLP com
              total segurança e qualidade, seguindo todas as normas técnicas.
              Antes do serviço, realizamos uma avaliação detalhada para garantir
              a compatibilidade e o correto ajuste dos componentes. Após a
              conversão, testamos o equipamento para assegurar um funcionamento
              eficiente e seguro.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              loading="lazy"
              src="/img/conversao.webp"
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
            src="/img/medidor.jpg"
            alt="Sc fogoes"
            width={420}
            height={420}
            className="lg:w-96 xl:w-[420px]"
          />
        </div>
        <div className="lg:w-1/3 px-4 flex flex-col items-center lg:items-start gap-4">
          <p className="font-bold  text-2xl">Instalação de medidor</p>
          <p className="font-semibold">Fazemos instação de medidor de gás</p>
          <p className="text-center lg:text-start">
            Realizamos a instalação de medidores de gás com total segurança e
            excelência, seguindo todas as normas técnicas. Antes da instalação,
            verificamos a compatibilidade do sistema e a necessidade de ajustes.
            Após a conclusão, realizamos testes rigorosos para garantir o
            funcionamento preciso e seguro.
          </p>
        </div>
      </div>
      <div className="relative z-10">
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}
