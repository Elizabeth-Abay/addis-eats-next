import { paymentMethods } from "../../constants/variables";
import ConfirmOrderAndaPay from "../cart/components/step-two/ConfirmOrder.jsx";
import DeliveryDestination from "../cart/components/step-two/DeliveryDestination";
import OrderItems from "../cart/components/step-two/OrderItems";
import PaymentMethodBox from "../cart/components/step-two/PaymentMethod";
import RecipientContact from "../cart/components/step-two/RecipientContact";
import "../cart/styles/styles.css";


export default function StepTwo(){
    return (
        <div>
            <RecipientContact />
            <DeliveryDestination/>
            <ConfirmOrderAndaPay />
            {/* loop through payment methods  */}
            {
                paymentMethods.map(
                    paymentMethod => <PaymentMethodBox key={paymentMethod.id} item={paymentMethod}/>
                )
            }
            <OrderItems/>
        </div>
        

    )
}
