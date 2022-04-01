import React from "react";
import Stepper1 from "../../../Steppers.js/Stepper1";
import Header from "../../../Headers";
import {useFormik} from 'formik'


const Form2 = (props) => {
    const formik = useFormik({
        initialValues:props.data,
        onSubmit: values => {
            props.next(values)
        },
        validationSchema: props.validation
    })
    return (
        
        <div className="mt-20 ml-40">
            <Header />
            <div className="grid grid-cols-3 w-2/3 mt-16">
                <div className= 'border-r border-slate-700/25' >
                <Stepper1 />
                </div>
                <div className="ml-16 col-span-2">
                    <p className="text-white/50 font-light text-sm mb-3">Step 2/5</p> 
                    <h2 className="text-white font-bold text-xl mb-3">What best describes you?</h2>
                    <p className="text-white/50 font-light text-sm mb-4">Please let us know what type of business describes you</p> 
            <div className="border-b border-slate-700/25 mt-8"></div>
                       {/* ({formik.values}) => ( */}
                    <form className="mt-8" onSubmit={formik.handleSubmit}>
                   <div className="relative mb-4">
                       <input type='radio' name='description' value='New Business' id="newBusiness" className="hidden peer" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                       <label for='newBusiness' className="grid border border-slate-400 rounded-md bg-transparent px-3 py-4 peer-checked:border-green-400 transition">
                           <div className="grid grid-cols-6">
                               <div className="w-16"> 
                                   <div className="flex ml-4 items-center justify-center bg-white/25 rounded-full w-12 h-12">
                                   🥳
                                   </div>
                               </div>
                               <div className="col-span-5">
                                   <p className="text-white">New Business</p>
                                   <p className="text-white/50 font-light">Started training within the last 12 months</p>
                               </div>
                           </div>
                       </label>
                   </div>
                   <div className="relative mb-5">
                       <input type='radio' name='description' value='Existing business' id="existing" className="hidden peer" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                       <label for='existing' className="grid border border-slate-400 rounded-md bg-transparent px-3 py-4 peer-checked:border-green-400 transition">
                           <div className="grid grid-cols-6">
                               <div className="w-16"> 
                                   <div className="flex ml-4 items-center justify-center bg-white/25 rounded-full w-12 h-12">
                                   😎
                                   </div>
                               </div>
                               <div className="col-span-5">
                                   <p className="text-white">Existing Business</p>
                                   <p className="text-white/50 font-light"> I've been operating beyond 12 months</p>
                               </div>
                           </div>
                       </label>
                   </div>
                   {formik.touched.description && formik.errors.description ? (<div className='text-white mb-8 bg-red-500 py-1 px-2 w-40 rounded-md'>{formik.errors.description}</div>) : null}
            
                   <div className="flex ml-64">
                    <button type='button' className='text-white' onClick={() => props.prev()}>Back</button>

                    <button type="submit" className="bg-green-400 px-6 py-3 text-xs text-white font-medium rounded-3xl ml-16">Next Step</button>
                        
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Form2