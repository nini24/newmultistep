import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useSelector, useDispatch} from 'react-redux'
import { goToNext,goBack } from "../../../redux/formSlice";
import RegistrationPageHook from "../RegistrationPage_hook"



const Form3 = (props) =>
{
    const dispatch= useDispatch()
    const {data, form3Validation} = RegistrationPageHook()
    
    return (
        <div className="">
            <Formik
            initialValues={data}
            validationSchema={form3Validation}
            onSubmit= {(values) => {
                dispatch(goToNext(values))
                console.log(values)
            }}
            >
                {({values}) =>(
                    <Form className="mt-8">
                   <div className="relative mb-4">
                       <Field type='radio' name='services' id="website"  value='development' className="hidden peer" />
                       <label htmlFor='development' className="grid border border-slate-400 rounded-md bg-transparent px-3 py-4 peer-checked:border-green-400 transition">
                           <div className="grid grid-cols-6">
                               <div className="w-16"> 
                                   <div className="flex ml-4 items-center justify-center bg-white/25 rounded-full w-12 h-12">
                                   🧠
                                   </div>
                               </div>
                               <div className="col-span-5">
                                   <p className="text-white">Website Development</p>
                                   <p className="text-white/50 font-light">Development of Webflow Website</p>
                               </div>
                           </div>
                       </label>
                   </div>
                   <div className="relative mb-5"> 
                       <Field type='radio' name='services' id="design" value='design' className="hidden peer"/>
                       <label htmlFor='design' className="grid border border-slate-400 rounded-md bg-transparent px-3 py-4 peer-checked:border-green-400 transition">
                           <div className="grid grid-cols-6">
                               <div className="w-16"> 
                                   <div className="flex ml-4 items-center justify-center bg-white/25 rounded-full w-12 h-12">
                                   👻
                                   </div>
                               </div>
                               <div className="col-span-5">
                                   <p className="text-white">Existing Business</p>
                                   <p className="text-white/50 font-light"> Development of Website Design</p>
                               </div>
                           </div>
                       </label>
                   </div>
                   <div className='text-red-400 mb-8'><ErrorMessage name='services'/></div> 

            
                   <div className="flex ml-64">
                   <button type='button' className='text-white' onClick={()=> dispatch(goBack())}>Back</button>


                    <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-16">Next Step</button>
                        
                        </div>
                    </Form>
                    ) }
                    </Formik>
                </div>
    )
}

export default Form3