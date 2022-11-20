import ButtonLogOutContainer from "./style";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import UserContext from "../../context/UserContext";

function ButtonLogOut() {

  const navigate = useNavigate();

  const {
    setUsername,
    setPassword,
    setLoginError,
    setBalance,
    setTransaction
  } = useContext(UserContext);

  const logoutHandle = async () => {
    localStorage.clear();
    setUsername("");
    setPassword("");
    setLoginError(false);
    setBalance({});
    setTransaction([]);
    navigate('/')
  }

  return (
    <ButtonLogOutContainer>
      <button 
        type="button"
        onClick={ logoutHandle }
      >
        <span>Sair</span>
      </button>
    </ButtonLogOutContainer>
  );
}

export default ButtonLogOut;