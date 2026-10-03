"use client"
import userStore from "../../stores/userStore";
import WelcomePart from "./components/WelcomePart";
import AuthLoginForm from "./components/authLogIn";
import UserInformation from "./components/userInformation";
import './styles/style.css';

// check if the user is registered and do a conditional rendering based on that
export default function MyAccountPage(){
    let userIn = userStore(state => state.userIn)
    
    return (
        <div style={
            {
                display : "flex",
                flexDirection : "column"
            }
        }>
            <WelcomePart/>
            {
                userIn ?
                    <UserInformation />
                    :
                    <AuthLoginForm />
            }

        </div>
    );
}


// * Rule of hooks 
// use sthg - is called hooks in react
// hooks shld be called at the top
// never inside loops , conditions , nested functions