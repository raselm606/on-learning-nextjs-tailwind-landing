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

        <div className="w-full bg-[#D2E6E4]">
            <div className="flex gap-5 flex-col md:flex-row max-w-7xl mx-auto py-25">

                <div className="w-4/12 mb-5">
                    <Image src={logo} alt="logo" />

                    <div className="flex mb-5">
                        <Image src={address} alt="#" />
                        <p><span>Address:</span> Mirpur, Dhaka, Bangladesh</p>
                    </div>

                    <div className="flex mb-5">
                        <Image src={phone} alt="#" />
                        <p><span>Tel:</span> +8801681789989</p>
                    </div>

                    <div className="flex mb-5">
                        <Image src={time} alt="#" />
                        <p>  Response hours: 3pm to 3am </p>
                    </div>

                    <div className="flex mb-5">
                        <Image src={email} alt="#" />
                        <p>  Email: raselm606@gmail.com </p>
                    </div>

                </div>

                <div className="w-3/12 mb-3">
                <p>Categories</p>
                <ul>
                    <li><Link href="#">Counseling</Link></li>
                    <li><Link href="#">Health and fitness</Link></li>
                    <li><Link href="#">Individual development</Link></li>
                    <li><Link href="#">Blockchain </Link></li>
                </ul>
                </div>

                <div className="w-3/12 mb-3">
                <p>Links</p>
                <ul>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Blog</Link></li> 
                    <li><Link href="#">Contact us</Link></li> 
                </ul>
                </div>

                <div className="w-3/12 mb-3">
                <p>Links</p>
                <ul>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Blog</Link></li> 
                    <li><Link href="#">Contact us</Link></li> 
                </ul>
                </div>


            </div>
        </div>

    </>
  )
}

export default Footer