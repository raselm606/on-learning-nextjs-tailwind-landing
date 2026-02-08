

// react icons
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const CardZen = () => {

    return (
        <>
        <div className="mx-auto  max-w-7xl">
            <div className="grid grid-cols-12">
                <div className="col-span-4">
         
        <div className=" border bg-white  dark:border-slate-700 border-[#e5eaf2] shadow-lg">
            <div className=" flex items-center justify-center flex-col p-6">
                <h2 className="text-[1.5rem] text-[#3B9DF8] font-[600]">
                    Standard
                </h2>
                <p className="text-[#424242] dark:text-[#abc2d3] text-[1rem]">
                    Ideal for growing businesses
                </p>

                <div className="flex mt-6 gap-1">
                    <h2 className="font-[800] dark:text-[#abc2d3] text-[4rem] leading-[4rem]">
                        49.50
                    </h2>
                    <span className="text-[1.2rem] dark:text-[#abc2d3] font-[500]">$</span>
                </div>
                <p className="text-[#424242] dark:text-[#abc2d3]/70 text-[0.9rem]">per month</p>

                <button className="px-12 py-2 text-[#3B9DF8] rounded-3xl text-[#fff] text-[1rem] my-6">
                    Buy Now
                </button>
            </div>

            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-[600] text-[#424242] mt-3 px-6">
                What you will get?
            </h3>
            <div className="flex gap-3 flex-col py-4 px-6">
                <p className="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]">
                    <MdDone className="text-[#3B9DF8] text-[1.5rem]"/>5 Users
                </p>
                <p className="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]">
                    <MdDone className="text-[#3B9DF8] text-[1.5rem]"/>
                    50GB Storage
                </p>
                <p className="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]">
                    <MdDone className="text-[#3B9DF8] text-[1.5rem]"/>
                    Priority Email Support
                </p>
                <p className="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]">
                    <RxCross1 className="text-[#e73939] text-[1.2rem]"/>
                    Unlimited Users
                </p>
                <p className="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]">
                    <RxCross1 className="text-[#e73939] text-[1.2rem]"/>
                    100GB Storage
                </p>
                <p className="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]">
                    <RxCross1 className="text-[#e73939] text-[1.2rem]"/>
                    24/7 Live Chat Support
                </p>
            </div>
            <div className="w-full h-[10px] text-[#3B9DF8]"></div>
        </div>
        </div> 
            </div> 
        </div>
        </>
    );
};

export default CardZen;
                    