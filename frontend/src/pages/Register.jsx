import RegisterContainer from '../styles/Login'
import RegisterForm from '../components/RegisterForm'

function Register() {
  return (
    <RegisterContainer>
      <div className="form-container">
        <h1>Olá, faça seu cadastro.</h1>
        <RegisterForm />
      </div>
    </RegisterContainer>
  );
}

export default Register;