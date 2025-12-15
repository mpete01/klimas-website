//font - #2174A0
import Image from "next/image";

function Header(){

    return(
        <header>
            <div className="w-full flex items-center justify-between p-2">
                <div>
                    <Image src="/logo-nobg.png" alt="company logo" width={300} height={200} className="ml-32"/>
                </div>
            </div>
        </header>
    )
}

export default Header