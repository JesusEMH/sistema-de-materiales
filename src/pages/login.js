import React from "react";
import BannerLogin from "../components/login/bannerLogin";
import LoginForm from "../components/login/LoginForm";

export default function Login(){
    return(
        <div className="body-login">
            <BannerLogin />
            <main>
               <LoginForm/>
            </main>
            
        </div>
            
        
    );
}

