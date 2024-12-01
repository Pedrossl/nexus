import Image from "next/image";

export default function Page() {
  return (
    <div>
      <header className="bg-purple-600 h-16 flex justify-center items-center p-10">
        <Image src="/logo.svg" alt="Logo da ONG" width={159} height={30} />
      </header>
      <main>
        {/* Primeira Seção */}
        <div className="bg-[#4B0082]">
          <Image
            src="/Fram.png"
            alt="Fram Image"
            layout="responsive"
            width={100}
            height={150}
          />
          <div className="p-10">
            <p className="text-4xl font-bold mt-4 text-white">
              Junte-se <br />
              a startups com <br />
              <span className="text-blue-300">ideias <br /> inovadoras.</span>
            </p>
            {/* Link para o grupo */}
            <a
              href="https://chat.whatsapp.com/B9ABB4fOtZS6qqpz4A47oc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-6 mt-6 bg-blue-300 text-purple-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 mb-5"
            >
              Junte-se conosco
            </a>
          </div>
        </div>

        {/* Segunda Seção */}
        <div className="flex items-center justify-center bg-blue-200">
          <main className="text-center">
            <p className="text-purple-900 text-2xl font-semibold mb-6 mt-5">
              Receba alertas de <br />
              oportunidades de <br />
              startups que combinam <br />
              com você.
            </p>
            <div className="flex justify-center">
              <Image
                src="/ilustration.svg"
                alt="Ilustração"
                width={200}
                height={200}
                className="mb-5"
              />
            </div>
          </main>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-blue-700 text-white py-8 text-center">
        <nav className="mb-4 flex justify-center space-x-8">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Nexus For Workers
          </a>
          <a href="#" className="hover:underline flex items-center">
            Instagram
          </a>
        </nav>
        <p className="text-sm">@Nexus 2024</p>
      </footer>
    </div>
  );
}
