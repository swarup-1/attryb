import React, { useState } from 'react'
import styles from '../Styles/authentication.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginFun, registerFun } from '../Redux/DealerAuth/dealer.action';

const Authenticate = () => {
    const store=useSelector((state)=>state.dealerReducer);
    console.log(store)
    const dispatch=useDispatch()

    const [registered, setRegistered] = useState(false)
    const registerState={ name:"", email:"", password:""}
    const loginState={ email:"", password:""}
    const [register,setRegister]=useState(registerState)
    const [login,setLogin]=useState(loginState)
    
    const handleRegister=(e)=>{
        setRegister({...register, [e.target.name]: e.target.value })
    }
    const handleLogin=(e)=>{
        setLogin({...login, [e.target.name]: e.target.value })
    }
    const submitRegister=(e)=>{
        if(register!=registerState){
            dispatch(registerFun(register))
            setRegistered(true)
        }
        e.preventDefault()
    }
    const submitLogin=(e)=>{
      if(login!=loginState){
        dispatch(loginFun(login))
      }
      e.preventDefault()
    }


    return (
        <div className={styles.container}>
          <form onSubmit={submitRegister} className={styles.box}>
            <p className={styles.title}>Register</p>
            <input name="name" type="text" onChange={handleRegister} placeholder="Your Name" className={styles.input} />
            <input name="email" type="text" onChange={handleRegister} placeholder="Your Email" className={styles.input} />
            <input name="password" type="text" onChange={handleRegister} placeholder="Your Password" className={styles.input} />
            <button type="submit" className={styles.button}>Register</button>
            {registered ? (
              <p className={styles.register_success}>Now Please Login 👉</p>
            ) : (
              <p className={styles.register_failure}>If you don't have an account please Register..</p>
            )}
          </form>
          <form onSubmit={submitLogin} className={styles.box}>
            <p className={styles.title}>Login</p>
            <input name="email" type="text" onChange={handleLogin} placeholder="Your Email" className={styles.input} />
            <input name="password" type="text" onChange={handleLogin} placeholder="Your Password" className={styles.input} />
            <button type="submit" className={styles.button}>Login</button>
            {store.isAuth ? (
              <p className={styles.login_success}>Login Success</p>
            ) : (
              <p className={styles.login_failure}>have an account Login here..</p>
            )}
          </form>
        </div>
      );
    };

export default Authenticate