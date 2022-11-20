import { useContext, useEffect, useState } from "react";
import requestLogin from "../../api/requestLogin";
import LoginFormContainer from "./style";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../context/UserContext";

function LoginForm() {

  const {
    username,
    setUsername,
    password,
    setPassword,
    loginError, 
    setLoginError,
  } = useContext(UserContext);

  const [buttonDisabled, setButtonDisable] = useState(true)

  const navigate = useNavigate();

  const loginHandle = async (event) => {
    event.preventDefault();
    const response = await requestLogin({ username, password });
    setLoginError(false);
    if (response.message || response.message === "Unregistered user") {
      setLoginError(true);
    }
    localStorage.setItem('token', response.token);

    if (response.token) navigate('/home')
  }

  const buttonValidation = () => {
    const re = /[A-Z].*\d|\d.*[A-Z]/;
    const passwordFormat = re.test(password);
    const valid = username.length >= 3 && passwordFormat;
    setButtonDisable(!valid);
  }

  useEffect(() => {
    buttonValidation();
  }, [username, password])

  return (
    <LoginFormContainer>
      <label 
        htmlFor="login-form-input-username"
        className="username-label"
      >
        <span>Usuário</span>
        <input 
          type="text"
          data-testid="login-form-input-username"
          onChange={ ({ target }) => setUsername(target.value) }
        />
      </label>
      <label 
        htmlFor="login-form-input-password"
        className="password-label"
      >
        <span>Senha</span>
        <input 
          type="password"
          data-testid="login-form-input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="button"
        onClick={ loginHandle }
        disabled={ buttonDisabled }
      >
        <p>Entrar</p>
      </button>
      <span 
        className="create-account"
        onClick={ () => navigate('/register') }
      >
        Ainda Não tenho conta
      </span>
      <span className="error-login">
        { loginError && 'Login Fail!' }
      </span>
    </LoginFormContainer>
  );
}

export default LoginForm;