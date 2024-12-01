import Image from "next/image";

export default function Page() {
  return (
    <div>
      <header className="bg-[#0F52BA] h-16 flex justify-center items-center p-10">
        <Image src="/logo.svg" alt="Logo da ONG" width={159} height={30} />
      </header>
      <main>
        {/* Primeira Seção */}
        <div className="bg-[#0F52BA]">
          <Image
            src="/Group.png"
            alt="Fram Image"
            layout="responsive"
            width={100}
            height={150}
            className="pt-10"
          />
          <div className="p-10">
            <p className="text-4xl font-bold mt-4 text-white">
              Conecte <br />
              pessoas <br />
              <span className="text-blue-300">
                interessadas <br /> em sua startup
              </span>
            </p>
            {/* Link para o grupo */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSehoBhY3W4Bq3YM3BVlHb-HE2Nmb-xKPKlMhzGOeiitsDuUwQ/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-6 mt-6 bg-blue-300 text-purple-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 mb-5"
            >
              Participe conosco
            </a>
          </div>
        </div>

        {/* Segunda Seção */}
        <div className="flex items-center justify-center bg-blue-200">
          <main className="text-center">
            <p className="text-purple-900 text-2xl font-semibold mb-6 mt-5">
              Nós facilitamos a <br />
              visibilidade da sua <br />
              startup para talentos de <br />
              todos cantos de Pelotas.
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
