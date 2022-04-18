import React from "react";
import './Styles/Form1.css'
import {Formik, Field,Form,ErrorMessage} from 'formik'
import {useDispatch} from 'react-redux'
import { goToNext } from "../../../redux/formSlice";
import RegistrationPageHook from "../RegistrationPage_hook"




const NameForm = (props) => {
    const {form1Validation,data} = RegistrationPageHook()
    const dispatch = useDispatch()
   
    return (
            <div className="">
                <Formik initialValues={data}
                validationSchema={form1Validation}
                    onSubmit={(values , {setSubmitting}) => {
                        dispatch(goToNext(values))
                        console.log(values)
                    }}
                >
                    {() => (
                    <Form className="mt-8">
                        <label htmlFor="name" className="text-white font-light text-sm">Enter your name</label><br/>
                        <Field type='text' name='name' className="mt-1 mb-4 px-3 py-3 w-full bg-transparent text-white font-light border shadow-sm border-slate-400/75 rounded-md focus:outline-none focus:border-green-400" />
                       <div className='text-red-400 mb-8'><ErrorMessage name='name'/></div> 
                        <div className="grid justify-items-end">
                        <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-2/3">Next Step</button>
                        </div>
                    </Form>
                    )}
                    </Formik>
        </div>
    )
}

export default NameForm