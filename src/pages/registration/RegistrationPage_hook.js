import {useState} from 'react'
import Form1 from './views/Form1'
import * as Yup from 'yup'

function RegistrationPageHook() {

    const renderForm = (view) => {
        switch(view.name) {
            case 'form1':
                return <Form1 />
        }
}

    
    const [data, setData] = useState({
        name:'',
        description:'',
        services:'',
        budget: '12500hit',
        email:''
      
      })
      const [currentStep, setCurrentStep] = useState(0)
    
      const makeRequest = (formData) => {
        console.log('Form submitted', formData)
      }
    
      const nextStep = (newData, final=false) => {
        setData(prev => ({...prev, ...newData}))
        if(final) {
          makeRequest(newData)
          return
        }
        setCurrentStep(prev => prev + 1)
      }
      
      const prevStep = (newData) => {
        setData(prev => ({...prev, ...newData}))
        setCurrentStep(prev => prev - 1)
      }
    
      const form1Validation = Yup.object({
        name:Yup.string().max(30, 'Must be 30 characters or less').required('Please type your name')
      })
    
      /* - */
    
     /*  const steps = [<Form1 data={data} next={nextStep} validation={form1Validation} />, <Form2 data={data} next={nextStep} prev={prevStep} validation={form2Validation}/>, <Form3 data={data} next={nextStep} prev={prevStep} validation={form3Validation} />, <Form4 data={data} next={nextStep} prev={prevStep} />, <Form5 data={data} next={nextStep} prev={prevStep} validation={form5Validation}/>]
     */

      return {
        currentStep,
        renderForm
    }   

}

export default RegistrationPageHook
