import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncLogin, asyncRegister } from '../state/auth/middleware'

import { IconContext } from "react-icons";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

import style from "../styles/Login.module.css"

export default function Login() {
  const [formType, setType] = useState('login')
  const [showPass, setShowPass] = useState(false)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()

  function handleLogin(e) {
    e.preventDefault()

    dispatch(asyncLogin(formData.username, formData.password))
  }

  function handleRegister(e) {
    e.preventDefault()

    dispatch(asyncRegister(formData.username, formData.email, formData.password))
  }

  function handleForm(e) {
    e.preventDefault()

    if (formType === 'login') {
      handleLogin(e)
    } else {
      handleRegister(e)
    }
  }

  return (
    <section className={style.layout}>
      <div className={style.banner}>
        <h2 className={style.banner_title}>
          WELCOME TO <strong>TEDX</strong>UINJAKARTA
        </h2>
        {formType === 'login' ? (
          <div className={style.login_form}>
            <h2>Login</h2>
            <form onSubmit={(e) => handleForm(e)}>
              <input required type="text" placeholder="Username" onChange={e => setFormData({ ...formData, username: e.target.value })} />
              <div className={style.password_input}>
                <input required type={showPass ? 'text' : 'password'} placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
                <button type="button" onClick={() => setShowPass(!showPass)}>
                  <IconContext.Provider value={{ className: "icon", color: "white" }} >
                    {showPass ? (<FaRegEye />) : (<FaRegEyeSlash />)}
                  </IconContext.Provider>
                </button>
              </div>
              <div className={style.login_button}>
                <button type="submit" className='btn_secondary'>
                  LOGIN NOW
                </button>
              </div>
            </form>
            <span>Don't Have an Account? <b onClick={() => setType('register')}>Register</b></span>
          </div>
        ) : (
          <div className={style.login_form}>
            <h2>Register</h2>
            <form onSubmit={(e) => handleForm(e)}>
              <input required type="text" placeholder="Username" onChange={e => setFormData({ ...formData, username: e.target.value })} />
              <input required type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
              <div className={style.password_input}>
                <input required type={showPass ? 'text' : 'password'} placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
                <button type="button" onClick={() => setShowPass(!showPass)}>
                  <IconContext.Provider value={{ className: "icon", color: "white" }} >
                    {showPass ? (<FaRegEye />) : (<FaRegEyeSlash />)}
                  </IconContext.Provider>
                </button>
              </div>
              <div className={style.login_button}>
                <button type="submit" className='btn_secondary'>
                  REGISTER
                </button>
              </div>
            </form>
            <span>Already Have an Account? <b onClick={() => setType('login')}>Login Now</b></span>
          </div>
        )}
      </div>
    </section>
  );
}
