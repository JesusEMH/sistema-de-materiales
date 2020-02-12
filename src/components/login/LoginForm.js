import React from "react";

export default function LoginForm(){
    return(
        <React.Fragment>
            <h2>Ingresa al portal</h2>
            <form>
                <i className="at"></i>
                <input type="text" placeholder="Usuario..." className="input"/>
                <input type="password" placeholder="contrasena..." className="input"/>
                <input type="submit" className="submit" value="iniciar sesion"/>
                <p>olvidaste tu contrasena? haz click aqui para que te asignemos una nueva!</p>
            </form>
            <h3>
                CREAR UNA CUENTA
            </h3>
            
            
        </React.Fragment>
    )
}