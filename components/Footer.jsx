import Image from "next/image"
import Link from "next/link"
import address from "../public/images/address.png"
import email from "../public/images/email.png"
import logo from "../public/images/logo.svg"
import phone from "../public/images/phone.png"
import time from "../public/images/time.png"
const Footer = () => {
  return (
    <>

        <div className="w-full bg-[#D2E6E4] ">
            <div className="flex  px-4 gap-5 flex-col md:flex-row max-w-7xl mx-auto py-25">

                <div className="md:w-5/12 mb-5">
                    <Image  src={logo} className="mb-8" alt="logo" />

                    <div className="flex items-center mb-5">
                        <Image className="w-[15px] h-[20px] mr-3" src={address} alt="#" />
                        <p className="text-[#0B7077] text-[14px] leading-[20px] "><span className="font-bold">Address:</span> Mirpur, Dhaka, Bangladesh</p>
                    </div>

                    <div className="flex items-center mb-5">
                        <Image className="w-auto h-[20px] mr-3" src={phone} alt="#" />
                        <p className="text-[#0B7077] text-[14px] leading-[20px] "><span>Tel:</span> +8801681789989</p>
                    </div>

                    <div className="flex mb-5">
                        <Image className="w-auto h-[20px] mr-3" src={time} alt="#" />
                        <p className="text-[#0B7077] text-[14px] leading-[20px] ">  Response hours: 3pm to 3am </p>
                    </div>

                    <div className="flex mb-5">
                        <Image className="w-auto h-[20px] mr-3" src={email} alt="#" />
                        <p className="text-[#0B7077] text-[14px] leading-[20px] ">  Email: raselm606@gmail.com </p>
                    </div>

                </div>

                <div className="md:w-3/12 mb-3">
                <p className="text-[#0A033C] text-[16px] font-bold mb-8">Categories</p>
                <ul>
                    <li><Link className="text-[#0B7077] text-[14px] mb-3 inline-block" href="#">Counseling</Link></li>
                    <li><Link className="text-[#0B7077] text-[14px] mb-3 inline-block" href="#">Health and fitness</Link></li>
                    <li><Link className="text-[#0B7077] text-[14px] mb-3 inline-block" href="#">Individual development</Link></li>
                    <li><Link className="text-[#0B7077] text-[14px] mb-3 inline-block" href="#">Blockchain </Link></li>
                </ul>
                </div>

                <div className="md:w-2/12 mb-3">
                <p className="text-[#0A033C] text-[16px] font-bold mb-8">Links</p>
                <ul>
                    <li><Link className="text-[#0B7077] text-[14px] mb-3 inline-block" href="#">About Us</Link></li>
                    <li><Link className="text-[#0B7077] text-[14px] mb-3 inline-block"  href="#">Blog</Link></li> 
                    <li><Link className="text-[#0B7077] text-[14px] mb-3 inline-block" href="#">Contact us</Link></li> 
                </ul>
                </div>

                <div className="md:w-3/12 mb-3">
                <p>Stay up to date with the latest courses</p>

                <div className="bg-white rounded-2xl py-2 mt-5 px-3 flex justify-between">
                    <input type="text" placeholder="Email" />
                    <input className="bg-[#0B7077] text-white py-2 px-6 rounded-3xl" type="submit" placeholder="Send" />
                </div>
                
                </div>

               


            </div>
             <p className="text-[#0B7077] md:w-[30%] mx-auto mt-2 text-[12px] font-semibold text-center pb-8">© 2026 Copyright  ( Figma Community template ) & <Link className="font-bold" href="https://raselm.com">Raselm.com</Link> converted into <strong>NextJS</strong> with <strong>Tailwinds</strong></p>
        </div>

    </>
  )
}

export default Footer