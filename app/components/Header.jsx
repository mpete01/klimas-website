//font - #2174A0
import Image from "next/image";

function Header(){

    return(
        <header>
            <div className="w-full flex items-center justify-between p-2">
                <div>
                    <Image src="/logo-nobg.png" alt="company logo" width={350} height={500} className="ml-32"/>
                </div>
                <div className="flex space-x-40 mr-16">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Home</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">About</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Services</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Contact</button>
                </div>
            </div>
            <div className="bg-[#2174A0] h-1 w-full mt-1"></div>
        </header>
    )
}

export default Header