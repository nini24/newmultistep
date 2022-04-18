import React from "react";
import "antd/dist/antd.css";
import { Slider } from "antd";
import './Styles/Form4.css'
import {Formik, Form, ErrorMessage} from 'formik'
import {useDispatch} from 'react-redux'
import { goToNext,goBack } from "../../../redux/formSlice";
import RegistrationPageHook from "../RegistrationPage_hook"






const BudgetForm = (props) =>
 {
    const dispatch = useDispatch()
    const {data, form4Validation,marks}=RegistrationPageHook()
    
    
    return (
        <div className="">
                <Formik 
                initialValues={data}
                validationSchema={form4Validation}
                onSubmit= {(values) => {
                    dispatch(goToNext(values))
                    console.log(values)
                }}
                >
                    {(values) => (
                    <Form className="mt-16 text-white">
                        <Slider type='success' name='budget' className="text-white" marks={marks} /* defaultValue={12500} */  tooltipVisible min={5000} max={35000}/>
                       <div className='text-red-400 mb-8'><ErrorMessage name='budget'/></div> 
                        
                        <div className="flex ml-64 mt-16">
                        <button type='button' className='text-white' onClick={()=> dispatch(goBack())}>Back</button>


                    <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-16">Next Step</button>
                        
                        </div>
                    </Form>
                    )}
                      
                    </Formik>
                </div>
    )
}

export default BudgetForm