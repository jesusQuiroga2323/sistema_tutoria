import React from 'react'; 
import './LoginForm.css'; 
import { FaUser, FaLock } from "react-icons/fa";
import Card from './Card';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sistema de Tutorias</h1> 
                <div className="input-box">
                    <input type="text" placeholder='Correo institucional' required /> 
                    <FaUser className='icon'/>
                </div> 
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required /> 
                    <FaLock className='icon'/>
                </div> 

                <div className="remember-forgot">
                    <label><input type="checkbox" />Recuerdame</label> 
                    <a onClick={Card}>Olvidaste tu contraseña?</a>
                </div>

                <button type="submit">Iniciar sesión</button> 

            </form>
        </div>
    ); 
};  

export default LoginForm; 