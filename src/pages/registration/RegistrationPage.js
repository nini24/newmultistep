import Header from "../../Headers"
import RegistrationPageHook from "./RegistrationPage_hook"
import Stepper1 from "../../Steppers.js/Stepper1"
import Form1 from "./views/Form1"
import { render } from "@testing-library/react"

function RegistrationPage() {
    const {currentStep,renderForm} = RegistrationPageHook()


return (
        <div>
                <Header />
                {renderForm(Form1)}
              
</div>
)
}


export default RegistrationPage