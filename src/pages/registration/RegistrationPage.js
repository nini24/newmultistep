import Header from "../../Headers"
import RegistrationPageHook from "./RegistrationPage_hook"
import Stepper from "../../Steppers.js/Stepper"
import Form1 from "./views/nameForm"
import Form2 from "./views/describeForm"
import Form3 from "./views/serviceForm"
import Form4 from "./views/budgetForm"
import Form5 from "./views/emailForm"
import {useSelector, useDispatch} from 'react-redux'





function RegistrationPage() {

    const {renderView} = RegistrationPageHook()
    const dispatch = useDispatch()


    const view = useSelector((state) => state.form.view)



return (
        <div>
                <Header />
                <div className="flex mx-32 border-t border-white/25">
                <Stepper />
                <div className="py-12 ml-12 ">
                <p className="text-white/50 font-light text-sm mb-3">Step 1/5</p> 
                    <h2 className="text-white font-bold text-xl mb-3">What best describes you?</h2>
                    <p className="text-white/50 font-light text-sm mb-4">Please let us know what type of business describes you</p>    
                {renderView(view)}
                </div>
               
                </div>
                
              
</div>
)
}


export default RegistrationPage