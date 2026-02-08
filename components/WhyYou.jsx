import Image from "next/image"
import Link from "next/link"
import card_woman from "../public/images/card_woman.png"
import lines from "../public/images/lines.png"
import lines_two from "../public/images/lines_2.png"
import star from "../public/images/star.png"
const WhyYou = () => {
  return (
    <>
    <div className="max-w-7xl bg-[#DF1C25] mx-auto px-12 pt-15 relative rounded-2xl  pb-10 mb-20">
        
        <Image className="
        md:absolute  
        right-0
        -top-22
        z-1
        " src={card_woman} alt="#" />
        
        <Image className="
        md:absolute   
        bottom-0 left-1/2 -translate-x-1/2 
        " src={lines} alt="#" />
        
        <Image className="
        md:absolute  
        -bottom-4
        right-[25%]
        " src={lines_two} alt="#" />

        <div className="grid grid-cols-12">
            <div className="md:col-span-6 col-span-12">
                <h2 className="
                text-white
                md:text-[48px]
                text-[30px]
                font-bold 
                md:leading-[58px]
                leading-[40px]
                mb-5
                 md:mt-0
                 mt-5
                ">Why You should buy gift cards ?</h2>
                <div className="flex items-center gap-3 mb-5">
                    <Image className="w-5 h-5" src={star} alt="#" />
                    <p className="text-white">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                </div>
                <div className="flex items-center gap-3 mb-5">
                    <Image className="w-5 h-5" src={star} alt="#" />
                    <p className="text-white">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                </div>
                <div className="flex items-center gap-3 mb-5">
                    <Image className="w-5 h-5" src={star} alt="#" />
                    <p className="text-white">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                </div>

                <Link className="
                text-[#0B7077]
                bg-white 
                uppercase
                py-3 px-8
                hover:bg-[#0b7077]
                hover:text-white
                rounded-xl font-semibold mt-5 inline-block
                " href="#">Buy Now</Link>
            </div>
        </div>
        
    </div>
    <div className="max-w-7xl mx-auto mt-8 mb-15">
        <p className="text-center md:w-[70%] text-[22px] text-[#696984] mx-auto">Onlearing  is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
    </div>
    </>
  )
}

export default WhyYou