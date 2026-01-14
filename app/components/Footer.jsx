import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Rek Comfort Systems
            </h2>
            <p className="text-sm leading-relaxed">
              Szakszerű klímaberendezések beszerelése, karbantartása, valamint villanyszereléssel kapcsolatos munkálatok magas 
              szintű szolgáltatásának szállítása otthonokba és irodákba egyaránt.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Szolgáltatások</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white">
                  Klíma Beszerelés
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Hűtő/fűtőtest Javítás
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Karbantartás
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Sürgős Kiszállás
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Cég</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Elérhetőségek
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (New SEO-friendly addition) */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kapcsolat</h3>
            <p className="text-sm">
              Telefon: <a href="tel:+36203338912" className="hover:text-white">+36/20-333-8912</a>
            </p>
            <p className="text-sm">
              Email: <a href="mailto:rekcomfort@gmail.com" className="hover:text-white">rekcomfort@gmail.com</a>
            </p>
            <p className="text-sm">Budapest, Hungary</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Rek Comfort Systems. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
