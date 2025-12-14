//font - #2174A0
import Image from "next/image";

function Header(){

    return(
        <header>
            <div className="w-full flex items-center justify-between p-2">
                <div>
                    <Image src="/logo-nobg.png" alt="company logo" width={300} height={200} className="ml-32"/>
                </div>
                <div className="flex space-x-40 mr-16">
                    <button className="px-4 py-2 bg-blue-500 text-white text-2xl rounded-xl hover:cursor-pointer">Home</button>
                    <button className="px-4 py-2 bg-blue-500 text-white text-2xl rounded-xl hover:cursor-pointer">About</button>
                    <button className="px-4 py-2 bg-blue-500 text-white text-2xl rounded-xl hover:cursor-pointer">Services</button>
                    <button className="px-4 py-2 bg-blue-500 text-white text-2xl rounded-xl hover:cursor-pointer">Contact</button>
                </div>
            </div>
        </header>
    )
}

export default Header