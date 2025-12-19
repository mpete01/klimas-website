//font - #2174A0
import Image from "next/image";

function Header(){

    return(
        <header>
            <div className="w-full flex items-center justify-between p-2 sm:p-4 md:p-6">
                <div className="flex justify-start w-full">
                    <Image 
                        src="/logo-nobg.png" 
                        alt="company logo" 
                        width={300} 
                        height={200} 
                        className="ml-16 sm:ml-16 md:ml-8 lg:ml-0 max-w-full h-auto" 
                    />
                </div>
            </div>
        </header>
    )
}

export default Header