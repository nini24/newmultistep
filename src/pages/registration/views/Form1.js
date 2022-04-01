import React from "react";
import './Styles/Form1.css'
import {useFormik} from 'formik'

const Form1 = (props) => {
    const formik = useFormik({
        initialValues:props.data,
        onSubmit: values => {
            props.next(values)
        },
        validationSchema:props.validation
    })

   
    return (

        <div className="mt-20 ml-40">
                       {/* {() => ( */}
                    <form className="mt-8" onSubmit={formik.handleSubmit}>
                        <label htmlFor="name" className="text-white font-light text-sm">Enter your name</label><br/>
                        <input type='text' name='name' onChange ={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="mt-1 mb-4 px-3 py-3 w-full bg-transparent text-white font-light border shadow-sm border-slate-400/75 rounded-md focus:outline-none focus:border-green-400" />
                       {formik.touched.name && formik.errors.name ? (<div className='text-white mb-8 bg-red-500 py-1 px-2 w-40 rounded-md'>{formik.errors.name}</div>) : null}
                        <div className="grid justify-items-end">
                        <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-2/3">Next Step</button>
                        </div>
                    </form>
        </div>
    )
}

export default Form1