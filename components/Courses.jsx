import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import course1 from "../public/images/course1.jpg"
import course2 from "../public/images/course2.jpg"
import course3 from "../public/images/course3.jpg"
import course4 from "../public/images/course4.jpg"
import line_head from "../public/images/line_head_green.png"
import st1 from "../public/images/st1.png"
import st2 from "../public/images/st2.png"
import st3 from "../public/images/st3.png"
import st4 from "../public/images/st4.png"
import st5 from "../public/images/st5.png"
const Courses = () => {
  return (
    <>

    <div className=" max-w-7xl mx-auto ">
        <div className=" px-3 pt-35 pb-25">
            <div className="bg-[#ffffff] relative mb-5">
                <h2 className="text-[48px] text-[#FD661F] leading-[58px] -tracking-[1px] font-bold text-center mb-9 relative">Popular Courses
                    <Image className="absolute hidden md:block right-[30%] -bottom-3 " src={line_head} alt="line" />
                </h2> 
                
            </div>

            <div className="mt-15 relative">
                 <Tabs defaultValue="overview" className="">
                    <TabsList className="flex flex-col md:flex-row gap-9 mx-auto justify-center text-center bg-white">
                        <TabsTrigger className="hover:bg-[#0B7077] hover:text-[#fff] data-[state=active]:bg-[#0B7077] data-[state=active]:text-[#fff] border-[1px] border-[#818C96]  data-[state=active]:px-10 data-[state=active]:py-6  px-10 py-6" value="overview">UI/UX Design</TabsTrigger>
                        <TabsTrigger className="hover:bg-[#0B7077] hover:text-[#fff] data-[state=active]:bg-[#0B7077] data-[state=active]:text-[#fff] border-[1px] border-[#818C96]  data-[state=active]:px-10 data-[state=active]:py-6  px-10 py-6" value="analytics">Web Development</TabsTrigger>
                        <TabsTrigger className="hover:bg-[#0B7077] hover:text-[#fff] data-[state=active]:bg-[#0B7077] data-[state=active]:text-[#fff] border-[1px] border-[#818C96]  data-[state=active]:px-10 data-[state=active]:py-6  px-10 py-6" value="reports">App Development</TabsTrigger>
                        <TabsTrigger className="hover:bg-[#0B7077] hover:text-[#fff] data-[state=active]:bg-[#0B7077] data-[state=active]:text-[#fff] border-[1px] border-[#818C96]  data-[state=active]:px-10 data-[state=active]:py-6  px-10 py-6" value="settings">Fast API</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-20">
                        
                         <div className="grid grid-cols-12 gap-5 justify-center">

                            <div className="md:col-span-3 col-span-12 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course1} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-4 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-12 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course2} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-4 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-12 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course3} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-9 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-12 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course4} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-4 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div>
                             
                         </div>
                         
                    </TabsContent>
                    <TabsContent value="analytics"  className="mt-10">
                        <div className="grid grid-cols-12 gap-5 justify-center">

                            <div className="col-span-3 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course1} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-4 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-span-3 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course2} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-4 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="reports"  className="mt-10">
                        <div className="grid grid-cols-12 gap-5 justify-center">

                            <div className="col-span-3 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course3} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-4 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                    </TabsContent>
                    <TabsContent value="settings"  className="mt-10">
                         <div className="grid grid-cols-12 gap-5 justify-center">

                            <div className="col-span-3 mb-6">
                                <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="w-full relative ">
                                        <Image className="w-full group-hover:scale-[1.1] transition ease-in-out" src={course4} alt="image1" />

                                        <div className="absolute -bottom-10 left-0  flex gap-1 bg-[#ffffff] rounded-[30px] items-center mx-auto justify-center   z-1 shadow-2xl mb-5 px-5 py-2 left-1/4 -translate-x-4 ">
                                            <div className="flex -space-x-3 overflow-hidden">
                                                <Image className="w-7 h-7" src={st1} alt="#" />
                                                <Image className="w-7 h-7" src={st2} alt="#" />
                                                <Image className="w-7 h-7" src={st3} alt="#" />
                                                <Image className="w-7 h-7" src={st4} alt="#" />
                                                <Image className="w-7 h-7" src={st5} alt="#" />
                                            </div>
                                            <p>+ 40 </p>
                                        </div>

                                        
                                    </div>

                                    <div className="flex-col mt-8 px-6">
                                        <span className="text-[#777795] text-[10px] mb-5 ">1 - 28 July 2022</span>
                                        <h4 className="text-[#0B7077] text-[16] font-extrabold leading-[25px] mb-5 group-hover:text-[#FD661F]">Product Management Basic - Course</h4>
                                        <p className="text-[#4D4D4D] text-[10px] leading-[20px] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                    </div>

                                    <div className="flex justify-between items-center w-full px-8 mt-8 mb-8">
                                        <div className="flex gap-2">
                                            <span className="text-[#FD661F] font-bold text-[16px] ">$380</span>
                                            <span className=" line-through text-[14px] text-[#230F0F]">$500</span>
                                        </div>
                                        <button className="bg-[#0B7077] text-[12px] group-hover:bg-[#FD661F] capitalize rounded-2xl text-white px-6 py-3">enroll now</button>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                    </TabsContent>
                    </Tabs>
            </div>
        </div>
    </div>


    </>
  )
}

export default Courses