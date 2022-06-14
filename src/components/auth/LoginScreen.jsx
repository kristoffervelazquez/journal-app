import { Link } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'
import { startFacebookLogin, startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { uiRemoveError, uiSetError } from '../../actions/ui'


const LoginScreen = () => {

    const dispatch = useDispatch();
    const uiState = useSelector(state => state.ui)

    const { msgError, loading } = uiState;




    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = e => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginWithEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const handleFacebookLogin = () => {
        dispatch(startFacebookLogin());
    }

    const isFormValid = () => {
        if (!validator.isEmail(email)) {
            dispatch(uiSetError('Email is not valid'));
            return false;
        } else {
            dispatch(uiRemoveError());
            return true
        }
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>

                {msgError
                    &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
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

                <button disabled={loading} className="btn btn-primary pointer btn-block" type="submit">Login</button>


                <div className="auth__social-networks">
                    <p className="mb-1">Login with social networks</p>
                    <button onClick={handleFacebookLogin} class="loginBtn loginBtn--facebook">
                        Login with Facebook
                    </button>
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