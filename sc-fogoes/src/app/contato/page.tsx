import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";

export default function Contato() {
  return (
    <div>
      <div className="bg-blue-950">
        <div className="relative z-10">
          <Navbar />
          <h3 className="mt-10 mx-6 xl:mt-24 2xl:mt-32 text-center font-bold text-2xl lg:text-4xl text-white">
            SINTA-SE À VONTADE PARA ENTRAR EM CONTATO CONOSCO
          </h3>
          <div className="text-white 2xl:mb-40 max-w-screen-2xl mx-auto justify-center gap-20 flex flex-col lg:flex-row mt-10 xl:mt-24 2xl:mt-32 p-6">
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
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
