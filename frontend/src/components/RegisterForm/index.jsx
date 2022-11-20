import { useContext, useEffect, useState } from "react";
import requestRegister from "../../api/requestRegister";
import LoginFormContainer from "./style";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../context/UserContext";

function RegisterForm() {

  const {
    username,
    setUsername,
    password,
    setPassword,
    setLoginError,
  } = useContext(UserContext);

  const [buttonDisabled, setButtonDisable] = useState(true)
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const registerHandle = async (event) => {
    event.preventDefault();
    setLoginError(false);

    const response = await requestRegister({ username, password });
    
    
    console.log(response)
    if(response.message === "success") setSuccess(true);

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
      <div>
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
        <p className="password-format">*senha deve conter 8 digitos incluindo 1 letra maiúscula e 1 numero</p>
        <button
          type="button"
          onClick={ registerHandle }
          disabled={ buttonDisabled }
        >
          <p>Cadastrar</p>
        </button>
      </div>
      <div className="button-login">
        {
          success && (
            <button
              type="button"
              onClick={ () => navigate("/") }
            >
              <p>Fazer login</p>
            </button>
          )
        }
      </div>
    </LoginFormContainer>
  );
}

export default RegisterForm;