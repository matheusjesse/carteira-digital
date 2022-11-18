import LoginFormContainer from "./style";

function LoginForm() {
  
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
        />
      </label>
      <button>
        <p>Entrar</p>
      </button>
    </LoginFormContainer>
  );
}

export default LoginForm;