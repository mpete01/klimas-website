'use client'
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../lib/font-awesome';

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
                            <FontAwesomeIcon icon="wind" size="xl"/>
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
                            <FontAwesomeIcon icon="wrench" size="xl"/>
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
                            <FontAwesomeIcon icon="toolbox" size="xl"/>
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
                    <FontAwesomeIcon icon="shield" size="xl"/>
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
                                    <FontAwesomeIcon icon="circle-check" size="xl"/>
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
                                    <FontAwesomeIcon icon="clock" size="xl"/>
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
                                    <FontAwesomeIcon icon="sack-dollar" size="xl"/>
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
                                    <FontAwesomeIcon icon="people-group" size="xl"/>
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
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-black">Lépjen velünk kapcsolatba</h2>
                    <p className="text-gray-700 text-xl">Időpontot szeretne foglalni vagy kapcsolatba szeretne lépni velünk? Ott segítünk ahol tudunk.</p>
                    <div>
                        <h3 className="font-semibold text-black"><FontAwesomeIcon icon="phone" size="xl" className="text-blue-500 mr-1"/>Telefonszám</h3>
                        <a href="tel:+36201234567" class="text-gray-600">+36/20-123-4567</a>
                    </div>
                    <div>
                        <h3 className="font-semibold text-black"><FontAwesomeIcon icon="envelope" size="xl" className="text-blue-500 mr-1"/>Email</h3>
                        <a href="mailto:rekcomfort@gmail.com" class="text-gray-700">rekcomfort@gmail.com</a>
                    </div>
                    <div>
                        <h3 className="font-semibold text-black"><FontAwesomeIcon icon="location-dot" size="xl" className="text-blue-500 mr-1"/>Cím</h3>
                        <p className="text-gray-700">5000 Szolnok<br/>Kossuth tér 9</p>
                    </div>
                    <div>
                    <h3 className="font-semibold text-gray-700"><FontAwesomeIcon icon="clock" size="xl" className="text-blue-500 mr-1"/>Ügyfélfogadás</h3>
                    <p className="text-gray-700">
                        Hétköznap: 8:00 - 17:00<br/>
                        Hétvége: 9:00 - 16:00<br/>
                        Sürgős kiszállás: 24/7
                    </p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black">Forduljon hozzánk egy konkrét hibával</h2>
                    <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black">Név</label>
                        <input type="text" placeholder="Név" className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">Email</label>
                        <input type="email" placeholder="pelda01@gmail.com" className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">Telefon</label>
                        <input type="tel" placeholder="+36201234567" class="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="text-black block text-sm font-medium ">Igényelt szolgáltatás</label>
                        <select className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>Klíma Beszerelés</option>
                            <option>Hűtő/fűtőtest Javítás</option>
                            <option>Karbantartás</option>
                            <option>Sürgős Kiszállás</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">Üzenet</label>
                        <textarea rows="4" placeholder="Írja le a problémáját..." className="text-gray-700 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>

                    <button type="submit" className="text-xl w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer">Üzenet Küldése</button>
                    </form>
                </div>
            </div>
        </section>
    </>

}

export default BodyComponent