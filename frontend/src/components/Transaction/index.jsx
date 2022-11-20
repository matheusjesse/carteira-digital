import TransactionContainer from "./style";
import { useContext, useState } from "react"
import UserContext from "../../context/UserContext";
import requestTransaction, { requestSetTransaction } from '../../api/requestTransaction';
import requestBalance from '../../api/requestBalance';

function Transaction() {
  
  const {
    username,
    setTransaction,
    setBalance
  } = useContext(UserContext);

  const [beneficiado, setBeneficiado] = useState('');
  const [value, setValue] = useState(0);

  const setTransactionData = async () => {
    const token= localStorage.getItem('token')
    const obj = {
      favorecedor: username,
      beneficiado: beneficiado,
      value: Number(value)
    }

    if (value > 0 && beneficiado.length > 3) {
      await requestSetTransaction(token, obj);
      const newTransaction = await requestTransaction(token);
      const newBalance = await requestBalance(token);
      setBalance(newBalance);
      setTransaction(newTransaction)
    }
  }
  
  return (
    <>
      {
        <TransactionContainer>
          <span className="title-transaction">Transferir</span>
          <label 
            htmlFor="transaction-form-input-beneficiado"
            className="username-label"
          >
          <span>Nome:</span>
          <input 
              type="text"
              data-testid="transaction-form-input-beneficiado"
              onChange={ ({ target }) => setBeneficiado(target.value) }
            />
          </label>
          <label 
            htmlFor="transaction-form-input-value"
            className="value-label"
          >
          <span>Valor:</span>
          <input 
              className="currency-input"
              type="number"
              data-testid="transaction-form-input-value"
              onChange={ ({ target }) => setValue(target.value) }
              value={value}
            />
          </label>
          <button
            type="button"
            onClick={ setTransactionData }
          >
            <p>Confirmar</p>
          </button>
        </TransactionContainer>        
      }   
    </>
  );
}

export default Transaction;