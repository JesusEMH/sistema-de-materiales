import React from "react";
import Logo from "../../assets/img/logo.png";

export default function BannerLogin(){

    return(
        <header className="header-login">
            <div><img src={Logo} className="logo"/></div>
            <h1>SISTEMA WEB DE GESTION DEL DEPARTAMENTO DE RECURSOS MATERIALES Y SERVICIOS</h1>
        </header>
    );
}