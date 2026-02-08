import Image from "next/image"
import id1 from "../public/images/id1.png"
import id2 from "../public/images/id2.png"
import logo1 from "../public/images/logo1.png"
import logo2 from "../public/images/logo2.png"
import logo3 from "../public/images/logo3.png"
const Benefit = () => {
  return (
    <>

        <div className="max-w-7xl mx-auto px-3 pt-35 pb-25">
            <div className="grid md:grid-cols-12 gap-8 items-center justify-center">
                <div className=" col-span-12 md:col-span-5 mb-3">
                    <div>
                        <span className="bg-[#F5F5F5] text-[#0B7077] text-[18px] font-medium py-3 px-5 rounded-[6px] mb-5 inline-block">Benefits</span>
                        <h2 className="text-[48px] text-[#0B7077] font-bold leading-[58px] 
                        -tracking-[1px] mb-16 mt-4">Get Student ID Card</h2>
                        <div className="flex flex-col justify-between gap-8 ">
                            <div className="flex items-center gap-8 mb-4">
                                <Image className="h-[50px] w-[50px] bg-[#e5e5e5] rounded-full  shadow-cyan-100  p-3" src={logo1} alt="logo1" />
                                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                            </div>
                            <div className="flex items-center gap-8 mb-4">
                                <Image className="h-[50px] w-[50px] bg-[#e5e5e5] rounded-full  shadow-cyan-100  p-3" src={logo2} alt="logo2" />
                                <p>TA’s and presenters can be moved to the front of the class.</p>
                            </div>
                            <div className="flex items-center gap-8 mb-4">
                                <Image className="h-[50px] w-[50px] bg-[#e5e5e5] rounded-full  shadow-cyan-100  p-3" src={logo3} alt="logo2" />
                                <p>Teachers can easily see all students and class data at one time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7 mb-3">
                    <div className="flex overflow-hidden gap-5 justify-center bg-[#D2E6E4] px-6 py-8 rounded-[6px]">
                        <Image 
                        className=" 
                        " 
                        
                        src={id1} alt="one" />
                        <Image src={id2} alt="one" />
                    </div>
                </div>

            </div>

        </div>
        
        
    </>
  )
}

export default Benefit