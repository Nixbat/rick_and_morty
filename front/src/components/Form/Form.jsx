import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(        
        <form className={style.formSubmit} onSubmit={handleSubmit}>
            <h2><span><img className={style.imagenInicio} src={require("../assets/images/rickandmortylog.png")} alt="logo" /></span></h2>

            <div className={style.userName}>
                <label htmlFor="username">Username</label>
                <input className={style.inputUser} type="text" name="username" value={userData.username} onChange={handleInputChange} />
                { errors.username && <p>{errors.username}</p> }
            </div>

            <div className={style.userName}>
                <label htmlFor="password">Password</label>
                <input className={style.inputPassword} type="password" name="password" value={userData.password} onChange={handleInputChange} />    
                {errors.password && <p>{errors.password}</p> }            
            </div>
            <button className={style.login} type="submit">LOGIN</button>
        </form>

     
    );
};

export default Form;