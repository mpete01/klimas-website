'use client'
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../lib/font-awesome';

function BodyComponent(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [serviceNeeded, setServiceNeeded] = useState('')
    const [issue, setIssue] = useState('')

    const handleSelectServiceNeeded = (e) => {
        setServiceNeeded(e.target.value)
    }

    const submitProblem = (e) => {
        e.preventDefault()
        if(name.trim() == '' || (email.trim() == '' && phone.trim() == '')){
            return toast.error('Név és telefon vagy email nem lehet üres', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
        }
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, serviceNeeded, issue })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
            if(data.message == "Email sent successfully"){
                toast.success('Email sikeresen elküldve', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setTimeout(() => {
                    setName('')
                    setEmail('')
                    setPhone('')
                    setServiceNeeded('')
                    setIssue('')
                }, 1500)
                
            } else {
                toast.error('Hiba az elküldésben. Kérem próbálja újra', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
        .catch(err => console.error(err))
        
    }

    return <>
        <section className="bg-blue-700 text-white px-6 py-16">
            <header className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    
                <div className="flex-1 max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Komfort rendszerek, klíma telepítés és karbantartás – Rek Comfort Systems
                    </h1>

                    <p className="text-blue-100 text-lg mb-4">
                        Professzionális hűtő- és fűtő klímák telepítése, karbantartása, valamint
                        villanyszereléssel kapcsolatos szolgáltatások kivitelezése otthonába vagy vállalkozásába.
                    </p>

                    <p className="text-blue-100 text-lg mb-8">
                        Gyors, megbízható és megfizethető megoldások – több mint 10 év tapasztalattal.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <a
                        href="tel:+36203338912"
                        aria-label="Hívjon most klíma telepítés és karbantartás miatt"
                        className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
                        >
                        Hívjon most
                        </a>
                    </div>

                    <div className="flex gap-10 mt-12" aria-label="Cég statisztikák">
                        <div>
                        <p className="text-3xl font-bold">10+</p>
                        <p className="text-blue-200 text-sm">Év tapasztalat</p>
                        </div>
                        <div>
                        <p className="text-3xl font-bold">1000+</p>
                        <p className="text-blue-200 text-sm">Elégedett ügyfél</p>
                        </div>
                        <div>
                        <p className="text-3xl font-bold">24/7</p>
                        <p className="text-blue-200 text-sm">Ügyeleti szolgáltatás</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end">
                <Image
                    src="/imgs/pic_8.jpg"
                    alt="Hűtő és fűtő klíma telepítése otthoni környezetben – Rek Comfort Systems"
                    width={1200}
                    height={1000}
                    className="w-full max-w-lg rounded-2xl shadow-lg"
                    priority
                />
                </div>

            </header>
        </section>

        <section id="services" className="bg-white py-20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
                id="services-heading"
                className="text-black text-4xl md:text-5xl font-semibold mb-4"
            >
                Szolgáltatásaink
            </h2>
            <p className="text-xl text-gray-600">
                Légkondicionáló rendszerek kiépítése, javítása és karbantartása az Ön igényeire szabva –
                a beszereléstől a rendszeres szervizelésig.
            </p>
            </div>

            <div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
            >

            {/* Klíma beszerelés */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8" role="listitem">
                <div
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6"
                aria-hidden="true"
                >
                    <FontAwesomeIcon icon="wind" size="xl" />
                </div>

                <h3 className="text-black text-lg font-semibold mb-3">
                Klíma beszerelés
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                Professzionális klíma beszerelés minden márkához. Felmérjük a helyiséget, és a
                légkondicionálót a legoptimálisabb helyre telepítjük a maximális hatékonyság
                és komfort érdekében.
                </p>

                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Ingyenes konzultáció
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Energiatakarékos modellek
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Garancia
                    </li>
                </ul>
            </article>

            {/* Klíma javítás */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8" role="listitem">
                <div
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6"
                aria-hidden="true"
                >
                    <FontAwesomeIcon icon="wrench" size="xl" />
                </div>

                <h3 className="text-black text-lg font-semibold mb-3">
                Klíma javítás és karbantartás
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                Gyors és megbízható klíma javítási és karbantartási szolgáltatások minden típusú
                légkondicionáló rendszerhez. Tapasztalt szakembereink gyorsan diagnosztizálnak
                és megoldják a felmerülő problémákat.
                </p>

                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Gyors, akár aznapi kiszállás
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Márkafüggetlen szerviz
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> 90 nap garancia
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Szezonális átvizsgálás
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Klímatisztítás
                    </li>
                </ul>
            </article>

            {/* Villanyszerelés */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8" role="listitem">
                <div
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6"
                aria-hidden="true"
                >
                    <FontAwesomeIcon icon="toolbox" size="xl" />
                </div>

                <h3 className="text-black text-lg font-semibold mb-3">
                Villanyszerelés
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                Tapasztalt villanyszerelőink megbízható és szabványos megoldásokat nyújtanak
                lakossági és üzleti elektromos munkák esetén.
                </p>

                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Vezeték behúzás és korszerűsítés
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Fi-relé és kismegszakító csere
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Lámpák és konnektorok kialakítása
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span>Villamoshálózat fejlesztés
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Hőszivattyúk bekötése és beüzemelése
                    </li>
                </ul>
            </article>

            {/* 24/7 ügyelet */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8" role="listitem">
                <div
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6"
                aria-hidden="true"
                >
                <FontAwesomeIcon icon="shield" size="xl" />
                </div>

                <h3 className="text-black text-lg font-semibold mb-3">
                24/7 ügyeleti szolgáltatás
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                Elromlott a klímája? Ügyeleti csapatunk a nap 24 órájában rendelkezésére áll,
                gyors és szakszerű segítséget nyújtva bármikor.
                </p>

                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> 24/7 elérhetőség
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Gyors kiszállás
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">✓</span> Előre egyeztetett árak
                    </li>
                </ul>
            </article>

            </div>
        </div>
        </section>

        <section className="bg-gray-100 py-20" aria-labelledby="why-us-heading">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <div className="flex-1">
                        <Image
                        src="/imgs/pic_7.jpg"
                        alt="Modern, kényelmes otthon hatékony légkondicionáló rendszerrel"
                        className="rounded-3xl shadow-lg w-full max-w-md mx-auto lg:mx-0"
                        width={1080}
                        height={1920}
                        />
                    </div>

                    <div className="flex-1 max-w-xl">
                        <h2
                        id="why-us-heading"
                        className="text-black text-3xl font-semibold mb-4"
                        >
                        Miért válasszon minket
                        </h2>

                        <p className="text-gray-600 mb-8">
                        Elkötelezettek vagyunk amellett, hogy kimagasló színvonalú
                        légkondicionáló rendszerekkel kapcsolatos szolgáltatásokat nyújtsunk
                        korrekt áron, hogy otthona egész évben kényelmes legyen.
                        </p>

                        <ul className="space-y-6">

                            <li className="flex items-start gap-4">
                                <div
                                className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                aria-hidden="true"
                                >
                                    <FontAwesomeIcon icon="circle-check" size="xl" />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold">
                                        Magasan képzett szakemberek
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Csapatunk tapasztalt, biztosított és naprakész tudással rendelkezik,
                                        folyamatosan követve a legújabb klímatechnológiai megoldásokat.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div
                                className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                aria-hidden="true"
                                >
                                    <FontAwesomeIcon icon="clock" size="xl" />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold">
                                        Gyors kiszállási idő
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Prioritásunk az Ön problémájának mielőbbi megoldása,
                                        gyors reagálással és szakszerű kivitelezéssel.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div
                                className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                aria-hidden="true"
                                >
                                    <FontAwesomeIcon icon="sack-dollar" size="xl" />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold">
                                        Átlátható árazás
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Nincsenek rejtett költségek. A hibafelmérés után minden esetben
                                        előre egyeztetett árajánlatot adunk, mielőtt a munkát megkezdjük.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div
                                className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                aria-hidden="true"
                                >
                                    <FontAwesomeIcon icon="people-group" size="xl" />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold">
                                        Vevőközpontúság
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Számunkra az ügyfél elégedettsége az első – minden munkát
                                        magas minőségben és maximális odafigyeléssel végzünk el.
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-white"
        >
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Contact info */}
                <div className="space-y-6">
                    <h2
                        id="contact-heading"
                        className="text-4xl md:text-5xl font-bold text-black"
                    >
                        Lépjen velünk kapcsolatba
                    </h2>

                    <p className="text-gray-700 text-xl">
                        Időpontot szeretne foglalni, vagy kérdése van klíma szereléssel,
                        karbantartással vagy villanyszereléssel kapcsolatban?
                        Keressen minket bizalommal!
                    </p>

                    <address className="not-italic space-y-4">

                        <div>
                            <h3 className="font-semibold text-black flex items-center gap-2">
                                <FontAwesomeIcon icon="phone" size="lg" className="text-blue-500" aria-hidden="true" />
                                Telefonszám
                            </h3>
                            <a
                                href="tel:+36203338912"
                                className="text-gray-700"
                                aria-label="Hívás indítása"
                            >
                                +36 20 333 8912
                            </a>
                        </div>

                        <div>
                            <h3 className="font-semibold text-black flex items-center gap-2">
                                <FontAwesomeIcon icon="envelope" size="lg" className="text-blue-500" aria-hidden="true" />
                                Email
                            </h3>
                            <a
                                href="mailto:rekcomfort@gmail.com"
                                className="text-gray-700"
                            >
                                rekcomfort@gmail.com
                            </a>
                        </div>

                        <div>
                            <h3 className="font-semibold text-black flex items-center gap-2">
                                <FontAwesomeIcon icon="clock" size="lg" className="text-blue-500" aria-hidden="true" />
                                Ügyfélfogadás
                            </h3>
                            <p className="text-gray-700">
                                Hétköznap: 8:00 – 17:00<br />
                                Hétvége: 9:00 – 16:00<br />
                                <strong>Sürgős kiszállás: 24/7</strong>
                            </p>
                        </div>
                    </address>
                </div>

                {/* Contact form */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-black">
                        Forduljon hozzánk egy konkrét hibával
                    </h3>

                    <form className="space-y-4" onSubmit={submitProblem}>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black">
                                Név*
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Név"
                                className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">
                                Email*
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="pelda01@gmail.com"
                                className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-black">
                                Telefon*
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+36201234567"
                                className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-black">
                                Igényelt szolgáltatás
                            </label>
                            <select
                                id="service"
                                required
                                value={serviceNeeded}
                                onChange={handleSelectServiceNeeded}
                                className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Válasszon a listából</option>
                                <option value="Klíma beszerelés">Klíma beszerelés</option>
                                <option value="Klíma javítás">Klíma javítás</option>
                                <option value="Karbantartás">Karbantartás</option>
                                <option value="Villanyvezeték probléma">Villanyvezeték probléma</option>
                                <option value="Biztosíték szerelés">Biztosíték szerelés</option>
                                <option value="Egyéb villanyszerelési probléma">
                                Egyéb villanyszereléssel kapcsolatos probléma
                                </option>
                                <option value="Sürgős kiszállás">Sürgős kiszállás</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-black">
                                Üzenet*
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={issue}
                                onChange={(e) => setIssue(e.target.value)}
                                placeholder="Írja le részletesebben a problémáját..."
                                className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <button
                        type="submit"
                        aria-label="Kapcsolatfelvételi űrlap elküldése"
                        className="text-xl w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
                        >
                        Üzenet küldése
                        </button>
                    </form>
                </div>

            </div>
        </section>

        <ToastContainer />
    </>

}

export default BodyComponent