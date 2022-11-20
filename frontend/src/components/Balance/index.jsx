import BalanceContainer from "./style";
import { useContext, useEffect } from "react"
import requestBalance from "../../api/requestBalance";
import UserContext from "../../context/UserContext";

function Balance() {

  const {
    balance,
    setBalance
  } = useContext(UserContext);

  const getBalance = async () => {
    const token= localStorage.getItem('token')
    const data = await requestBalance(token)
    
    setBalance(data);
  }

  useEffect(() => {
    getBalance();    
  },[])

  
  return (
    <>
      {
        balance.username && (
        <BalanceContainer>
          <span>{`Olá, ${balance.username}`}.</span>
          <span>{balance.account.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </BalanceContainer>
        )
      }   
    </>
  );
}

export default Balance;