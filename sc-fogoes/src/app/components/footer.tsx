export default function Footer() {
    return (
        <div className="w-full bg-blue-950 text-white text-base">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-28 pt-20 sm:px-20">
                    <div className="lg:w-1/3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d314426.68191383954!2d-34.839648!3d-7.10249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd1359e014f3%3A0x850840a91d6b46a8!2sAv.%20Maria%20Rosa%2C%201470%20-%20Mana%C3%ADra%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058038-461%2C%20Brasil!5e1!3m2!1spt-BR!2sus!4v1739674662893!5m2!1spt-BR!2sus"
                            width="300"
                            height="200"
                            loading="lazy"
                            className="w-full"
                        ></iframe>
                    </div>
                    {/*FALTA OS LINKS E OS SVG*/}
                    <div className="lg:w-1/3 gap-1">
                        <p className="font-bold mb-2">HORÁRIO DE FUNCIONAMENTO</p>
                        <p>Segunda-feira - Sexta-feira, 08:00 - 17:30</p>
                        <p>Sábado, 08:00 - 12:00</p>
                        <span>NOSSO ENDEREÇO</span>
                        <p>Av maria rosa 1470 sala 10, Manaira, João Pessoa-PB, Brasil</p>
                    </div>
                    <div className="lg:w-1/3 gap-1">
                        <p className="font-bold mb-2">ENTRE EM CONTATO</p>
                        <p>Fone: (83)3142-7333 </p>
                        <p>Whatsapp: (83)98800-5001</p>
                        <p>E-mail: <span>scfogoes@gmail.com</span></p>
                    </div>
                </div>
                <div className="flex justify-center py-20">
                    <p>
                        © 1969 SC Fogões | Todos os direitos reservados
                    </p>
                </div>
            </div>
        </div>
    )
}