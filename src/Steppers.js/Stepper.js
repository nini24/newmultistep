import React from "react";
import { FiUser } from 'react-icons/fi'
import { FiBookOpen } from 'react-icons/fi'
import { RiPenNibLine } from 'react-icons/ri'
import { RiPriceTag3Line } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { useSelector } from "react-redux";

const Stepper1 = () => {

    const progress = useSelector((state)=>state.form.view.progress)
    console.log(progress)
    return (
        <div className="space-y-12 mt-8">
            <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className={` text-right text-md font-semibold ${progress >=1 ? 'text-white':'text-white/25'}` }>Your Name</p>
                        <p className={`text-right text-sm font-light ${progress >=1 ?'text-white/50':'text-white/25' }`}>Browse and upload</p> 
                    </div>
                    <div className={`flex items-center justify-center rounded-full w-12 h-12 ${progress >=1 ? 'bg-green-400':'bg-white/25'}`}>
                        <FiUser color="white" size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className={`text-right text-md font-semibold ${progress >=2 ? 'text-white':'text-white/25'}`}>Describes</p>
                        <p className={`text-right text-sm font-light ${progress >=2 ? 'text-white/50':'text-white/25'}`}>Browse and upload</p> 
                    </div>
                    <div className={`flex items-center justify-center rounded-full w-12 h-12 ${progress >=2 ? 'bg-green-400':'bg-white/25'}`}>
                        <FiBookOpen color={`${progress >=2?'white':'grey'}`}  size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className={`text-right text-md font-semibold ${progress >=3 ? 'text-white':'text-white/25'}` }>Services</p>
                        <p className={`text-right text-sm font-light ${progress >=3 ? 'text-white/50':'text-white/25'}`}>Browse and upload</p> 
                    </div>
                    <div className={`flex items-center justify-center rounded-full w-12 h-12 ${progress >=3 ? 'bg-green-400':'bg-white/25'}`}>
                        <RiPenNibLine color={`${progress >=3?'white':'grey'}`} size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className={`text-right text-md font-semibold ${progress >=4 ? 'text-white':'text-white/25'}`}>Budget</p>
                        <p className={`text-right text-sm font-light ${progress >=4 ? 'text-white/50':'text-white/25'}`}>Browse and upload</p> 
                    </div>
                    <div className={`flex items-center justify-center rounded-full w-12 h-12 ${progress >=4 ? 'bg-green-400':'bg-white/25'}`}>
                        <RiPriceTag3Line color={`${progress >=4? 'white':'grey'}`} size={22} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mr-8">
                        <p className={`text-right text-md font-semibold ${progress >=5 ? 'text-white':'text-white/25'}`}>Complete</p>
                        <p className={`text-right text-sm font-light ${progress >=5 ? 'text-white/50':'text-white/25'}`}>Browse and upload</p> 
                    </div>
                    <div className={`flex items-center justify-center rounded-full w-12 h-12 ${progress >=5 ? 'bg-green-400':'bg-white/25'} `}>
                        <AiOutlineMail color={`${progress >=5? 'white':'grey'}`}  size={22} />
                    </div>
                </div>
        </div>
    )
}
export default Stepper1