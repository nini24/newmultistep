import {useState} from 'react'
import * as Yup from 'yup'
import {useSelector} from 'react-redux'
import NameForm from "./views/nameForm"
import DescribeForm from "./views/describeForm"
import ServiceForm from "./views/serviceForm"
import BudgetForm from "./views/budgetForm"
import EmailForm from "./views/emailForm"

function RegistrationPageHook() {

  const view = useSelector((state) => state.form.view)
    const renderView = (view) => {
        switch(view.name) {
            case 'name':
                return <NameForm/>
            case 'describe':
                return <DescribeForm />
            case 'services':
              return <ServiceForm />
              case 'budget':
              return <BudgetForm />
              case 'email':
              return <EmailForm />
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


      const marks = {
        5000: '5,000',
        12500: '12,500',
        27500: '27,500',
        35000: '35,000'
    }
    
    
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

      /* const validation = Yup.object({
        name:Yup.string().max(30, 'Must be 30 characters or less').required('Please type your name'),
        description:Yup.string().required('An option is required'),
        services:Yup.string().required('An option is required'),
        budget:Yup.string().required('Pick a value'),
        email:Yup.string().email('Invalid email').required('Please enter a mail')
      }) */
    
    
      return {
        renderView,
        form1Validation,
        form2Validation,
        form3Validation,
        form4Validation,
        form5Validation,
        data,
        marks
    }   

}

export default RegistrationPageHook
