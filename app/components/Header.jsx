import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo linking to home */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Rek Comfort Systems home">
            <Image
              src="/logo-nobg.png"
              alt="Rek Comfort Systems Logo"
              width={300}
              height={100}
              className="h-auto max-w-full"
              priority
            />
          </Link>
        </div>

        <nav aria-label="Fő navigáció" className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link href="#services" className="hover:text-[#2174A0] transition">
            Szolgáltatások
          </Link>
          <Link href="#contact" className="hover:text-[#2174A0] transition">
            Kapcsolat
          </Link>
        </nav>

        {/* call to action button */}
        <div className="hidden md:block">
          <a
            href="tel:+36703926234"
            className="bg-[#2174A0] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Hívjon most
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
