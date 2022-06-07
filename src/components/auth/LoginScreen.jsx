import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth'
import { useDispatch } from 'react-redux'


const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'correo@correo.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = e => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary pointer btn-block" type="submit">Login</button>


                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div onClick={handleGoogleLogin}
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>



                <Link className="link" to="/auth/register">Create new account</Link>
            </form>
        </>
    )
}

export default LoginScreen