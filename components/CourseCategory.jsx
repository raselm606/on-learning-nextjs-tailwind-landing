import Image from "next/image"
import Link from "next/link"
import cat1 from "../public/images/cat1.png"
import cat2 from "../public/images/cat2.png"
import cat3 from "../public/images/cat3.png"
import cat4 from "../public/images/cat4.png"
import line_head from "../public/images/line_head.png"
const CourseCategory = () => {
  return (
    <>
    <div className="  bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-3 pt-35 pb-25">
            <div className="bg-[#ffffff] relative">
                <h2 className="text-[48px] text-[#0B7077] leading-[58px] -tracking-[1px] font-bold text-center mb-9 relative">Courses Category
                    <Image className="absolute hidden md:block right-[30%] -bottom-3 " src={line_head} alt="line" />
                </h2>
                <p className="text-center md:w-[40%] mx-auto mb-5">Onlearing  is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
                
            </div>

            <div className="grid md:grid-cols-12 gap-8 justify-center">
                <div className="col-span-3 mb-3">
                    <div className="group hover:bg-[#fff] hover:shadow-2xl transition-all ease-in-out p-7 rounded-[6px] text-center">
                        <Image className="mx-auto" src={cat1} alt="cate1" />
                        <h4 className="mt-4 text-[27px] leading-[36px] text-[#0B7077] font-semibold mb-6">Beauty</h4>
                        <p className="mb-10"> One powerful online software suite that combines</p>
                        <Link className=" group-hover:hidden transition-all ease-in-out " href="#">more</Link>
                        <Link className="group-hover:bg-[#FD661F] hidden group-hover:block  transition-all ease-in-out py-3 px-10 group-hover:text-[#ffffff]" href="#">Explore more</Link>
                    </div>
                </div>
                <div className="col-span-3 mb-3">
                    <div className="group hover:bg-[#fff] hover:shadow-2xl transition-all ease-in-out p-7 rounded-[6px] text-center">
                        <Image className="mx-auto" src={cat2} alt="cate1" />
                        <h4 className="mt-4 text-[27px] leading-[36px] text-[#0B7077] font-semibold mb-6">Medical</h4>
                        <p className="mb-10"> One powerful online software suite that combines</p>
                        <Link className=" group-hover:hidden transition-all ease-in-out " href="#">more</Link>
                        <Link className="group-hover:bg-[#FD661F] hidden group-hover:block  transition-all ease-in-out py-3 px-10 group-hover:text-[#ffffff]" href="#">Explore more</Link>
                    </div>
                </div>
                <div className="col-span-3 mb-3">
                    <div className="group hover:bg-[#fff] hover:shadow-2xl transition-all ease-in-out p-7 rounded-[6px] text-center">
                        <Image className="mx-auto" src={cat3} alt="cate1" />
                        <h4 className="mt-4 text-[27px] leading-[36px] text-[#0B7077] font-semibold mb-6">Sports</h4>
                        <p className="mb-10"> One powerful online software suite that combines</p>
                        <Link className=" group-hover:hidden transition-all ease-in-out " href="#">more</Link>
                        <Link className="group-hover:bg-[#FD661F] hidden group-hover:block  transition-all ease-in-out py-3 px-10 group-hover:text-[#ffffff]" href="#">Explore more</Link>
                    </div>
                </div>
                <div className="col-span-3 mb-3">
                    <div className=" group hover:bg-[#fff] hover:shadow-2xl transition-all ease-in-out p-7 rounded-[6px] text-center">
                        <Image className="mx-auto" src={cat4} alt="cate1" />
                        <h4 className="mt-4 text-[27px] leading-[36px] text-[#0B7077] font-semibold mb-6">Nutritions</h4>
                        <p className="mb-10"> One powerful online software suite that combines</p>
                       <Link className=" group-hover:hidden transition-all ease-in-out " href="#">more</Link>
                        <Link className="group-hover:bg-[#FD661F] hidden group-hover:block  transition-all ease-in-out py-3 px-10 group-hover:text-[#ffffff]" href="#">Explore more</Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <Link href="#" className="py-3 hover:bg-[#0b7077] hover:text-[#fff] transition-all ease-in-out px-9 border-1 border-[#0B7077] rounded-[8px] ">View All</Link>
            </div>
        </div>
        </div>
    </>
  )
}

export default CourseCategory