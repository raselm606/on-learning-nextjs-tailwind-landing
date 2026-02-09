import Image from "next/image"
import Link from "next/link"
import calender from "../public/images/calender.png"
import explore from "../public/images/explore.svg"
import hero_img from "../public/images/hero_img.png"
import icon2 from "../public/images/icon2.png"
import top_line from "../public/images/top_lines.png"
import user1 from "../public/images/user1.png"
import user2 from "../public/images/user2.png"
import user3 from "../public/images/user3.png"
const HeroSection = () => {
  return (
    <>
        <div className="bg-[#D2E6E4] md:h-[850px]  h-[650px] max-w-full relative z-[1]"> 
            <Image className=" hidden md:block absolute  -z-[1] left-1/2 -translate-x-1/2 top-10  " src={top_line} alt="" />

            <div className=" mx-auto  max-w-7xl px-4 py-[100px] md:py-[200px] items-center grid grid-cols-12 gap-7.1">
                <div className="md:col-span-7 col-span-12 ">
                    <p className="bg-[#ffffff] inline-block px-5 py-1 rounded-sm mb-4">Never stop learning</p>
                    <h1 className="text-[30px] mt-5 mb-7 md:text-[64px] md:leading-[70px] font-bold text-[#0B7077] leading-[40px]">Grow up your skills by online courses with Onlearning</h1>

                    <div className="flex md:flex-row flex-col  gap-3 md:items-center ">
                        
                        <Link href="#"
                        className="bg-[#FD661F] text-[#fff] w-[160px]  inline-block uppercase py-3 px-5 rounded-lg">Explore Path</Link>

                        <div className="mt-5 md:mt-0 items-center flex -space-x-2 overflow-hidden">
                            <Image src={user1} alt="#" />
                            <Image src={user2} alt="#" />
                            <Image src={user3} alt="#" /> 
                        </div>

                        <div>
                            <p></p>
                            <p>(10k + Reviews)</p>
                        </div>
                    </div>



                </div>
                <div className="md:flex z-10 justify-center items-center px-3 py-3 bg-[rgb(255,255,255,.7)]  rounded-lg gap-8 hidden w-[300px] h-[100px]
                absolute bottom-[28%] right-[32%]">
                    <Image src={calender} alt=" claneder " />
                    <div className=" flex flex-col">
                        <span>250k</span>
                        <p>Assisted Student</p>
                    </div>
                </div>
                <div className="absolute  right-[1%] hidden md:block  md:right-[10%] bottom-0">
                    <Image  src={hero_img} alt="heroimg" />
                </div>
             
                    <Image src={icon2} alt="icon2" className="absolute md:block hidden right-[15%] bottom-[40%]"/>
                    <Image className="absolute  -bottom-[90px]  left-1/2 -translate-x-1/2 
                    bg-[white] p-4 rounded-full shadow-2xl" src={explore} alt="explore_area" />
           
                <div></div>

            </div>
        </div>

    
            
       
        
         

        
       

    </>
  )
}

export default HeroSection