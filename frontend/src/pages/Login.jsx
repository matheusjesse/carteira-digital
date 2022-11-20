import LoginContainer from '../styles/Login'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <LoginContainer>
      <div className="form-container">
        <h1>Olá, faça seu login.</h1>
        <LoginForm />
      </div>
    </LoginContainer>
  );
}

export default Login;