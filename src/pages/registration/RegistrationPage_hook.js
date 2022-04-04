import {useState} from 'react'
import * as Yup from 'yup'
import {useSelector} from 'react-redux'
import Form1 from "./views/nameForm"
import Form2 from "./views/describeForm"
import Form3 from "./views/serviceForm"
import Form4 from "./views/budgetForm"
import Form5 from "./views/emailForm"

function RegistrationPageHook() {

  const view = useSelector((state) => state.form.view)
    const renderView = (view) => {
        switch(view.name) {
            case 'name':
                return <Form1/>
            case 'describe':
                return <Form2 />
            case 'services':
              return <Form3 />
              case 'budget':
              return <Form4/>
              case 'email':
              return <Form5/>
              default:
                break;
        }
}

const name = useSelector((state) => state.form.data.name)
const description = useSelector((state) => state.form.data.description)
const services = useSelector((state) => state.form.data.services)
const budget = useSelector((state) => state.form.data.budget)
const email = useSelector((state) => state.form.data.email)

const data ={
      name:name,
      description:description,
      services:services,
      budget:budget,
      email:email
}
    
    /* const [data, setData] = useState({
        name:'',
        description:'',
        services:'',
        budget: '12500hit',
        email:''
      
      }) */



      const marks = {
        5000: '5,000',
        12500: '12,500',
        27500: '27,500',
        35000: '35,000'
    }
    
    
      const makeRequest = (formData) => {
        console.log('Form submitted', formData)
      }
    
     /*  const nextStep = (newData, final=false) => {
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
     */
      const form1Validation = Yup.object({
        name:Yup.string().max(30, 'Must be 30 characters or less').required('Please type your name')
      })

      const form2Validation = Yup.object({
        description:Yup.string().required('An option is required')
      })
      const form3Validation = Yup.object({
        services:Yup.string().required('An option is required')
      })
      const form4Validation = Yup.object({
        budget:Yup.string().required('Pick a value')
      })
      const form5Validation = Yup.object({
        email:Yup.string().email('Invalid email').required('Please enter a mail')
      })

      const validation = Yup.object({
        name:Yup.string().max(30, 'Must be 30 characters or less').required('Please type your name'),
        description:Yup.string().required('An option is required'),
        services:Yup.string().required('An option is required'),
        budget:Yup.string().required('Pick a value'),
        email:Yup.string().email('Invalid email').required('Please enter a mail')
      })
    
    
      return {
        renderView,
        form1Validation,
        form2Validation,
        form3Validation,
        form4Validation,
        form5Validation,
        validation,
        data,
        marks
    }   

}

export default RegistrationPageHook
