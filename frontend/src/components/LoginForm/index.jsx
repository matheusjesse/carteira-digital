import { useState } from "react";
import requestLogin from "../../api/requestLogin";
import LoginFormContainer from "./style";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
 
  const navigate = useNavigate();

  const loginHandle = async () => {
    const response = await requestLogin({ username, password });
    if (response.message) {
      setLoginError(true);
    }

    navigate()
  }

  return (
    <LoginFormContainer>
      <label 
        htmlFor="login-from-input-username"
        className="username-label"
      >
        <span>Usuário</span>
        <input 
          type="text"
          data-testid="login-from-input-username"
          onChange={ ({ target }) => setUsername(target.value) }
        />
      </label>
      <label 
        htmlFor="login-from-input-password"
        className="password-label"
      >
        <span>Senha</span>
        <input 
          type="password"
          data-testid="login-from-input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="button"
        onClick={ loginHandle }
      >
        <p>Entrar</p>
      </button>
      <span>
        { loginError && 'Login Fail!' }
      </span>
    </LoginFormContainer>
  );
}

export default LoginForm;