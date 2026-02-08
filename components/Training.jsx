import Image from "next/image"
import logo1 from "../public/images/logo1.png"
import logo2 from "../public/images/logo2.png"
import logo3 from "../public/images/logo3.png"
import training from "../public/images/training.jpg"
const Training = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto px-3  pb-25">
                    <div className="grid md:grid-cols-12 gap-8 items-center ">
                        
                        <div className="col-span-12 md:col-span-6  mb-3">
                            <div className="flex overflow-hidden gap-5 justify-center   px-2 py-2 rounded-[6px]"> 
                                <Image src={training} alt="one" />
                            </div>
                        </div>
                        
                        <div className=" col-span-12  md:col-span-6 mb-3">
                            <div>
                                <span className="bg-[#D4E1FF] text-[#0B7077] text-[18px] font-medium py-3 px-5 rounded-[6px] mb-5 inline-block">Training</span>
                                <h2 className="text-[48px] text-[#FD661F] font-bold leading-[58px] 
                                -tracking-[1px] mb-16 mt-4">Staff Training</h2>
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
        
                    </div>
        
                </div>
    </>
  )
}

export default Training