'use client'
import Image from "next/image"
import { useState } from "react"

function BodyComponent(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [serviceNeeded, setServiceNeeded] = useState('')
    const [] = useState('')

    return <>
        <section className="bg-blue-700 text-white px-6 py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Professzionális klíma szerelés és karbantartás
                    </h1>
                    <p className="text-blue-100 text-lg mb-8">
                        Professszionális hűtő- és fűtő klímák megoldásának kivitelezése othhonában vagy vállalkozásában.
                        Gyors, megbízható és megfizetehető szolgáltatás amiben megbízhat.    
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition">Foglaljon időpontot</button>
                        <button className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition">Hívjon most</button>
                    </div>
                    <div className="flex gap-10 mt-12">
                        <div>
                            <p className="text-3xl font-bold">10+</p>
                            <p className="text-blue-200 text-sm">Év Tapasztalat</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">1000+</p>
                            <p className="text-blue-200 text-sm">Elégedett ügyfelek</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">24/7</p>
                            <p className="text-blue-200 text-sm">Ügyeleti Szolgáltatás</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                <Image
                    src="/imgs/pic_8.jpg"
                    alt="AC installation"
                    width={1200}
                    height={1000}
                    className="w-full max-w-lg rounded-2xl shadow-lg"/>
                </div>
            </div>
        </section>
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-black text-4xl md:text-5xl font-semibold mb-4">Szolgáltatásaink</h2>
                    <p className="text-xl text-gray-600">Légkondicionáló rendszer kiépítése az Ön igényéhez szabva. A beszereléstől a karbantartásig mi megcsinálunk Önnek mindent.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M14 14.76V3a2 2 0 10-4 0v11.76a4 4 0 104 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-black text-lg font-semibold mb-3">Klíma installáció</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Professzionális beszerelése az összes klíma márkának. Felmérjük a helységet és a legoptimálisabb helyre szereljük be a maximum hatékonyság és komfort eléréséhez
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span> Ingyenes konzultáció
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span> Energiatakarékos modellek
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span>Garancia
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M21 2l-2 2m-2 2l-4 4m-2 2l-8 8 2 2 8-8m2-2l4-4m2-2l2-2"/>
                            </svg>
                        </div>
                        <h3 className="text-black text-lg font-semibold mb-3">Klíma javítás</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Gyors és megbízható javítási szolgáltatások minden, a klíma rendszerrel kapcsoaltos hibára. 
                            Tapasztalt szakembereink gyorsan diagnosztizálnak és megjavítanak mindne felmerülő problémát
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span>Gyors, akár aznapi kiszállás
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span>Márkafüggetlen szervíz
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span>90 nap garnacia
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                            <svg className=" size-5 fill-current stroke-width-2 stroke-currentColor ">
                                <path d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0114-7M19 5a9 9 0 01-14 7"/>
                            </svg>
                        </div>
                        <h3 className="text-black text-lg font-semibold mb-3">Karbantartás</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Rendszeres karbantartással hatékonyabbul fog működni a rendszer. Növelje a klímája élettartamát a megelőző karbantartási csomagunkkal.
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span>Szezonális átnézés
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span>Klímatakarítás
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <span className="text-blue-600">✓</span>Költséghatékony
                            </li>
                        </ul>
                    </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/>
                    </svg>
                    </div>
                    <h3 className="text-black text-lg font-semibold mb-3">24/7 Ügyelet</h3>
                    <p className="text-gray-600 text-sm mb-6">
                        Elromlott a klímája? A nap 24 órájában rendelkezésére állunk. Ügyeleti csapatunk gyorsan és szakszerűen megoldja a problémáját bármikor.
                    </p>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-blue-600">✓</span> 24/7 elérhetőség
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-blue-600">✓</span>Gyors kiszállás
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <span className="text-blue-600">✓</span>Hiba felmérése után egyeztetett ár
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <Image
                        src="/imgs/pic_7.jpg"
                        alt="Comfortable living room"
                        className="rounded-3xl shadow-lg w-full max-w-md mx-auto lg:mx-0"
                        width={1080}
                        height={1920}
                        />
                    </div>
                    <div className="flex-1 max-w-xl">
                        <h2 className="text-black text-3xl font-semibold mb-4">Miért válasszon minket</h2>
                        <p className="text-gray-600 mb-8">
                            Elkötelezettek vagyunk amellett, hogy kimagasló légkondicionáló rendszerekkel kapcsolatos 
                            szolgáltatást nyújtsunk baráti áron, egést évben, hogy Önnek egész évben kényelmes legyen az otthona.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4M12 22a10 10 0 110-20 10 10 0 010 20z"/>
                                    </svg>
                                    </div>
                                    <div>
                                    <h3 className="text-black font-semibold">Magasan képzett szakemberek</h3>
                                    <p className="text-gray-600 text-sm">
                                        A csapatunk magasan képzett, biztosított és napra kész tudással rendelkezik a legfrissebb technológiákkal kapcsolatban is
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2"/>
                                    </svg>
                                    </div>
                                    <div>
                                    <h3 className="text-black font-semibold">Gyors kiszállási idő</h3>
                                    <p className="text-gray-600 text-sm">
                                        Prioritásunk az Ön problémájának lehető leggyorsabb megoldása a legszakszerűbb módon
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path d="M12 1v22M17 5H9a4 4 0 000 8h6a4 4 0 010 8H7"/>
                                    </svg>
                                    </div>
                                    <div>
                                    <h3 className="text-black font-semibold">Átlátható árazás</h3>
                                    <p className="text-gray-600 text-sm">
                                        Nincsnek rejtett költésgek. Hibafelmérés esetén mindig a munka megkezdése előtt adunk egy árajánlatot, 
                                        így elkerülve hogy meglepetés érje az Ön pénztárcáját
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"/>
                                    </svg>
                                    </div>
                                    <div>
                                    <h3 className="text-black font-semibold">Vevőközpontuság</h3>
                                    <p className="text-gray-600 text-sm">
                                        Nekünk az Ön elégedettsége az első, így csak magas színvonalú szolgáltatást és munkát adunk ki a kezünk közül
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                <div class="space-y-6">
                    <h2 class="text-4xl md:text-5xl font-bold text-black">Lépjen velünk kapcsolatba</h2>
                    <p class="text-gray-700 text-xl">Időpontot szeretne foglalni vagy kapcsolatba szeretne lépni velünk? Ott segítünk ahol tudunk.</p>
                    <div>
                    <h3 class="font-semibold text-black">Telefonszám</h3>
                    <a href="tel:+36201234567" class="text-gray-600">+36/20-123-4567</a>
                    </div>
                    <div>
                    <h3 class="font-semibold text-black">Email</h3>
                    <p class="text-gray-700">info@coolcomfort.com</p>
                    </div>
                    <div>
                    <h3 class="font-semibold text-black">Address</h3>
                    <p class="text-gray-700">123 Main Street<br/>Your City, ST 12345</p>
                    </div>
                    <div>
                    <h3 class="font-semibold text-gray-700">Hours</h3>
                    <p class="text-gray-700">
                        Mon - Fri: 7:00 AM - 7:00 PM<br/>
                        Sat - Sun: 8:00 AM - 5:00 PM<br/>
                        Emergency: 24/7
                    </p>
                    </div>
                </div>
                <div class="space-y-6">
                    <h2 class="text-2xl font-bold text-black">Request a Quote</h2>
                    <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-black">Name</label>
                        <input type="text" placeholder="Név" class="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-black">Email</label>
                        <input type="email" placeholder="pelda01@gmail.com" class="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-black">Phone</label>
                        <input type="tel" placeholder="+36201234567" class="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label class="text-black block text-sm font-medium ">Service Needed</label>
                        <select class="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>AC Installation</option>
                            <option>Heating Repair</option>
                            <option>Maintenance</option>
                            <option>Emergency Service</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-black">Message</label>
                        <textarea rows="4" placeholder="Tell us about your needs..." class="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>

                    <button type="submit" class="text-xl w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </>

}

export default BodyComponent