// import { useDispatch } from 'react-redux';
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { uiSetError, uiRemoveError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'


const RegisterScreen = () => {

    const dispatcher = useDispatch();
    const uiState = useSelector(state => state.ui);

    const { msgError, loading } = uiState;




    const [formValues, setValues] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = e => {
        e.preventDefault();


        if (isFormValid()) {
            dispatcher(startRegisterWithEmailPasswordName(email, password, name));
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatcher(uiSetError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatcher(uiSetError('Email is not valid'));
            return false;
        } else if (!validator.isStrongPassword(password, { minSymbols: 0 })) {
            dispatcher(uiSetError('Weak password, try with other'))
            return false;
        } else if (password !== password2) {
            dispatcher(uiSetError('Passwords should match each other'));
        } else {
            dispatcher(uiRemoveError());
            return true;
        }
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                {msgError
                    &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={setValues}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={setValues}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={setValues}

                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={setValues}

                />

                <button disabled={loading} className="btn btn-primary pointer btn-block mb-5" type="submit">Register</button>


                {/* <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div> */}



                <Link className="link" to="/auth/login">Already register? Login</Link>
            </form>
        </>
    )
}

export default RegisterScreen