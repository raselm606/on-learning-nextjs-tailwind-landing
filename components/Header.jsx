import Image from "next/image"
import Link from "next/link"
import logo from "../public/images/logo.svg"
const Header = () => {
return (
    <>
    <div className="  top-0  bg-[rgb(210,230,228,0.6)] z-10 mx-auto w-full fixed">
            <div className="  flex justify-between item-center px-4 py-5 max-w-7xl mx-auto">
                    <div> 
                            <Image src={logo} alt="logo" />
                    </div>
                    <div className="main-menu hidden md:flex items-center gap-12.5 font-semibold text-[18px] ">
                            <Link className="text-[#252641] hover:text-[#FD661F] transition-colors" href="/">Home</Link>
                            <Link className="text-[#252641] hover:text-[#FD661F] transition-colors" href="/">Careers</Link>
                            <Link className="text-[#252641] hover:text-[#FD661F] transition-colors" href="/">Blog</Link>
                            <Link className="text-[#252641] hover:text-[#FD661F] transition-colors" href="/">About Us</Link>
                             
                    </div>
                    <div className="flex items-center  gap-8"> 
                            <Link className="bg-[#0B7077] pt-2.5 hidden md:block pr-6 pb-2.5 pl-6 rounded-[6px] text-[#ffffff] text-[18px] uppercase hover:text-[#ffffff] hover:bg-[#FD661F] transition-all ease-in-out duration-300" href="#">Login</Link>
                            <Link className="bg-[#0B7077] pt-2.5 pr-6 pb-2.5 pl-6 rounded-[6px] text-[#ffffff] text-[18px] uppercase hover:text-[#ffffff] hover:bg-[#FD661F] transition-all ease-in-out duration-300" href="#">Signup</Link>
                            
                    </div>

            </div>
    </div>
    </>
)
}

export default Header