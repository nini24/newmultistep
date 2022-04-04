import React from "react";
import { FiUser } from 'react-icons/fi'
import { FiBookOpen } from 'react-icons/fi'
import { RiPenNibLine } from 'react-icons/ri'
import { RiPriceTag3Line } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'

const Stepper1 = () => {
    return (
        <div className="space-y-12 mt-8">
            <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className="text-white text-right text-md font-semibold">Your Name</p>
                        <p className="text-white/50 text-right text-sm font-light ">Browse and upload</p> 
                    </div>
                    <div className="flex items-center justify-center bg-green-400 rounded-full w-12 h-12">
                        <FiUser color="white" size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className="text-white/25 text-right text-md font-semibold">Describes</p>
                        <p className="text-white/25 text-right text-sm font-light ">Browse and upload</p> 
                    </div>
                    <div className="flex items-center justify-center bg-white/25 rounded-full w-12 h-12">
                        <FiBookOpen color="grey" size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className="text-white/25 text-right text-md font-semibold">Services</p>
                        <p className="text-white/25 text-right text-sm font-light ">Browse and upload</p> 
                    </div>
                    <div className="flex items-center justify-center bg-white/25 rounded-full w-12 h-12">
                        <RiPenNibLine color="grey" size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className="text-white/25 text-right text-md font-semibold">Budget</p>
                        <p className="text-white/25 text-right text-sm font-light ">Browse and upload</p> 
                    </div>
                    <div className="flex items-center justify-center bg-white/25 rounded-full w-12 h-12">
                        <RiPriceTag3Line color="grey" size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className="text-white/25 text-right text-md font-semibold">Complete</p>
                        <p className="text-white/25 text-right text-sm font-light ">Browse and upload</p> 
                    </div>
                    <div className="flex items-center justify-center bg-white/25 rounded-full w-12 h-12">
                        <AiOutlineMail color="grey" size={22} />
                    </div>
                </div>
        </div>
    )
}
export default Stepper1