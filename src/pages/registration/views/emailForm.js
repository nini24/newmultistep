import React from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {useDispatch} from 'react-redux'
import { goBack } from "../../../redux/formSlice";
import RegistrationPageHook from "../RegistrationPage_hook"



const EmailForm = (props) => {
    const dispatch = useDispatch()
    const {data, form5Validation}=RegistrationPageHook()

 
    return (
        <div className="">
            <Formik
            initialValues={data}
            validationSchema={form5Validation}
            onSubmit={(values)=> {
                alert(JSON.stringify(values,null,2))
            }}
            >
                    {() => (
                    <Form className="mt-8">
                        <label htmlFor="email" className="text-white font-light text-sm">Enter your email</label><br/>
                        <Field type='email' name='email' className="mt-1 mb-4 px-3 py-3 w-full bg-transparent text-white font-light border shadow-sm border-slate-400 rounded-md focus:outline-none focus:border-green-400" />
                       <div className='text-red-400 mb-8'><ErrorMessage name='email'/></div> 
                        
                        
                        <div className="flex ml-52 mt-12"> 
                        <button type='button' className='text-white' onClick={()=> dispatch(goBack())}>Back</button>
                    <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-12">Complete Submission</button>


                        </div>
                    </Form>
                    )}
                    </Formik>
                    
                </div>
    )
}

export default EmailForm