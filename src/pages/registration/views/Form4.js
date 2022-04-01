import React from "react";
import Stepper1 from "../../../Steppers.js/Stepper1";
import Header from "../../../Headers";
import "antd/dist/antd.css";
import { Slider } from "antd";
import '../Styles/Form4.css'
import {useFormik} from 'formik'



const marks = {
    5000: '5,000',
    12500: '12,500',
    27500: '27,500',
    35000: '35,000'

}

const Form4 = (props) =>
 {
     const formik = useFormik({
         initialValues:props.data,
         onSubmit: (values) => {
             props.next(values)
         }
     })
    
    return (
        <div className="mt-20 ml-40">
            <Header />
            <div className="grid grid-cols-3 w-2/3 mt-16">
                <div className= 'border-r border-slate-700/25' >
                <Stepper1 />
                </div>
                <div className="ml-16 col-span-2">
                    <p className="text-white/50 font-light text-sm mb-3">Step 4/5</p> 
                    <h2 className="text-white font-bold text-xl mb-3">Please select your budget.</h2>
                    <p className="text-white/50 font-light text-sm mb-3">Please let us know the budget for your project</p> 
            <div className="border-b border-slate-700/25 mt-8"></div>
                      
                    <form className="mt-16 text-white" onSubmit={formik.handleSubmit}>
                        <Slider type='success' className="text-white" marks={marks} /* defaultValue={12500} */  tooltipVisible min={5000} max={35000}/>
                        <div className="flex ml-64 mt-16">
                        <button type='button' className='text-white' onClick={()=> props.prev()}>Back</button>


                    <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-16">Next Step</button>
                        
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Form4