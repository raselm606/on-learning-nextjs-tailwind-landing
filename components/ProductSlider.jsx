"use client"
import Image from "next/image"
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import pd1 from "../public/images/product1.png"
import st1 from "../public/images/st1.png"
import st2 from "../public/images/st2.png"
import st3 from "../public/images/st3.png"
import st4 from "../public/images/st4.png"
import st5 from "../public/images/st5.png"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProductSlider = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto pt-15 pb-25">
        <div className="flex  justify-center">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]} 
            slidesPerView={1}
            navigation
            autoplay
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
                
                <SwiperSlide>
                    <div className="md:w-9/12 w-12/12 shadow-2xl bg-white mx-auto relative overflow-hidden    rounded-2xl ">
                        <div className="flex flex-col md:flex-row items-center gap-8">

                            <div className="md:w-5/12 relative ">
                            <Image src={pd1} alt="#" />
                            <div className="flex bg-white absolute   w-[160px] h-[52px] rounded-[30px] right-[15%] bottom-[10px]  justify-between items-center  " >
                                <span className=" text-[23px]  text-[#FD661F] font-bold ml-3 ">$380</span>
                                <span className=" text-[20px]  text-gray-400 line-through  mr-3 ">$500</span>
                            </div>
                            </div>

                            <div className="md:w-7/12 p-5 md:p-0">
                                <span className="  text-[#777795] text-[14px] mb-5 
                                ">1 - 28 July 2026</span>
                                <h4 className=" text-[22px] leading-[32px] text-[#0B7077] font-extrabold mb-5
                                ">Web Development - Course</h4>
                                <p className=" text-[14px]  text-[#4D4D4D]  leading-[24px]  mb-8 md:w-[80%] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                <div className="flex gap-2 items-center">
                                    <div className="flex -space-x-3 overflow-hidden">
                                <Image src={st1} alt="#" />
                                <Image src={st2} alt="#" />
                                <Image src={st3} alt="#" />
                                <Image src={st4} alt="#" />
                                <Image src={st5} alt="#" />
                            </div>
                            <p>+ 40 students</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:w-9/12 w-12/12 shadow-2xl bg-white mx-auto relative overflow-hidden    rounded-2xl ">
                        <div className="flex flex-col md:flex-row items-center gap-8">

                            <div className="md:w-5/12 relative ">
                            <Image src={pd1} alt="#" />
                            <div className="flex bg-white absolute   w-[160px] h-[52px] rounded-[30px] right-[15%] bottom-[10px]  justify-between items-center  " >
                                <span className=" text-[23px]  text-[#FD661F] font-bold ml-3 ">$380</span>
                                <span className=" text-[20px]  text-gray-400 line-through  mr-3 ">$500</span>
                            </div>
                            </div>

                            <div className="md:w-7/12 p-5 md:p-0">
                                <span className="text-[#777795] text-[14px] mb-5 
                                ">1 - 28 January 2026</span>
                                <h4 className="text-[22px] leading-[32px] text-[#0B7077] font-extrabold mb-5
                                ">Python Development - Course</h4>
                                <p className="text-[14px]  text-[#4D4D4D]  leading-[24px]  mb-8 md:w-[80%] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                <div className="flex gap-2 items-center">
                                    <div className="flex -space-x-3 overflow-hidden">
                                <Image src={st1} alt="#" />
                                <Image src={st2} alt="#" />
                                <Image src={st3} alt="#" />
                                <Image src={st4} alt="#" />
                                <Image src={st5} alt="#" />
                            </div>
                            <p>+ 40 students</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:w-9/12 w-12/12 shadow-2xl bg-white mx-auto relative overflow-hidden    rounded-2xl ">
                        <div className="flex flex-col md:flex-row items-center gap-8">

                            <div className="md:w-5/12 relative ">
                            <Image src={pd1} alt="#" />
                            <div className="flex bg-white absolute   w-[160px] h-[52px] rounded-[30px] right-[15%] bottom-[10px]  justify-between items-center  " >
                                <span className=" text-[23px]  text-[#FD661F] font-bold ml-3 ">$380</span>
                                <span className=" text-[20px]  text-gray-400 line-through  mr-3 ">$500</span>
                            </div>
                            </div>

                            <div className="md:w-7/12 p-5 md:p-0">
                                <span className="  text-[#777795] text-[14px] mb-5 
                                ">1 - 28 July 2026</span>
                                <h4 className=" text-[22px] leading-[32px] text-[#0B7077] font-extrabold mb-5
                                ">Office Management Basic - Course</h4>
                                <p className=" text-[14px]  text-[#4D4D4D]  leading-[24px]  mb-8 md:w-[80%] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                <div className="flex gap-2 items-center">
                                    <div className="flex -space-x-3 overflow-hidden">
                                <Image src={st1} alt="#" />
                                <Image src={st2} alt="#" />
                                <Image src={st3} alt="#" />
                                <Image src={st4} alt="#" />
                                <Image src={st5} alt="#" />
                            </div>
                            <p>+ 40 students</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:w-9/12 w-12/12 shadow-2xl bg-white mx-auto relative overflow-hidden    rounded-2xl ">
                        <div className="flex flex-col md:flex-row items-center gap-8">

                            <div className="md:w-5/12 relative ">
                            <Image src={pd1} alt="#" />
                            <div className="flex bg-white absolute   w-[160px] h-[52px] rounded-[30px] right-[15%] bottom-[10px]  justify-between items-center  " >
                                <span className=" text-[23px]  text-[#FD661F] font-bold ml-3 ">$380</span>
                                <span className=" text-[20px]  text-gray-400 line-through  mr-3 ">$500</span>
                            </div>
                            </div>

                            <div className="md:w-7/12 p-5 md:p-0">
                                <span className="  text-[#777795] text-[14px] mb-5 
                                ">1 - 28 July 2026</span>
                                <h4 className=" text-[22px] leading-[32px] text-[#0B7077] font-extrabold mb-5
                                ">Mobile App Development - Course</h4>
                                <p className=" text-[14px]  text-[#4D4D4D]  leading-[24px]  mb-8 md:w-[80%] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                <div className="flex gap-2 items-center">
                                    <div className="flex -space-x-3 overflow-hidden">
                                <Image src={st1} alt="#" />
                                <Image src={st2} alt="#" />
                                <Image src={st3} alt="#" />
                                <Image src={st4} alt="#" />
                                <Image src={st5} alt="#" />
                            </div>
                            <p>+ 40 students</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:w-9/12 w-12/12 shadow-2xl bg-white mx-auto relative overflow-hidden    rounded-2xl ">
                        <div className="flex flex-col md:flex-row items-center gap-8">

                            <div className="md:w-5/12 relative ">
                            <Image src={pd1} alt="#" />
                            <div className="flex bg-white absolute   w-[160px] h-[52px] rounded-[30px] right-[15%] bottom-[10px]  justify-between items-center  " >
                                <span className=" text-[23px]  text-[#FD661F] font-bold ml-3 ">$380</span>
                                <span className=" text-[20px]  text-gray-400 line-through  mr-3 ">$500</span>
                            </div>
                            </div>

                            <div className="md:w-7/12 p-5 md:p-0">
                                <span className="  text-[#777795] text-[14px] mb-5 
                                ">1 - 1 July 2026</span>
                                <h4 className=" text-[22px] leading-[32px] text-[#0B7077] font-extrabold mb-5
                                ">Product Management Basic - Course</h4>
                                <p className=" text-[14px]  text-[#4D4D4D]  leading-[24px]  mb-8 md:w-[80%] ">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                                <div className="flex gap-2 items-center">
                                    <div className="flex -space-x-3 overflow-hidden">
                                <Image src={st1} alt="#" />
                                <Image src={st2} alt="#" />
                                <Image src={st3} alt="#" />
                                <Image src={st4} alt="#" />
                                <Image src={st5} alt="#" />
                            </div>
                            <p>+ 40 students</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
    </>
  )
}

export default ProductSlider