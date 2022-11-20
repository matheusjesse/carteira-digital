import { useEffect, useContext, useState } from "react";
import HeaderDetailsContainer from "./style";
import UserContext from "../../context/UserContext";
import { requestTransactionFilter } from '../../api/requestTransaction';

function HeaderTransactionDatails() {

  const {
    setTransaction
  } = useContext(UserContext);

  const [filter, setFilter] = useState({
    date: "recent",
    filter: null
  });
  
  const fechTransaction = async () => {
    const token= localStorage.getItem('token')
    let filterType = filter
    if (filter.date === "null") filterType = { date: null, filter: filter.filter }
    if (filter.filter === "null") filterType = { date: filter.date, filter: null }
    const response = await requestTransactionFilter(token, filterType);
    
    setTransaction(response);
  }
    
  return (
    <>
      {        
        <HeaderDetailsContainer>
        <span className="transaction-title">Filtrar</span>
        <div className="left-section">
          <span>Data:</span>
          <span>Transação:</span>          
        </div>
        <div className="right-section">
          <div className="date-section">
            <label
              htmlFor="date-dropdown-recent"
            >
              <select 
                name="date"
                data-testid="date-dropdown-recent"
                onChange={ ({ target }) => setFilter({ date: target.value, filter: filter.filter }) }
              >
                <option 
                  value="null"
                ></option>
                <option 
                  value="recent"
                >
                  Recente
                </option>
                <option 
                  value="old"
                >
                  Antigo
                </option>
              </select>
            </label>
          </div>
          <div className="transaction-section">
            <label
                htmlFor="transaction-dropdown-recent"
              >
                <select 
                  name="transaction"
                  data-testid="transaction-dropdown-recent"
                  onChange={ ({ target }) => setFilter({ date: filter.date, filter: target.value }) }
                >
                  <option 
                    value="null"
                  ></option>
                  <option
                    value="cashin"
                  >
                    Recebido
                  </option>
                  <option 
                    value="cashout"
                  >
                    Enviado
                  </option>
                </select>
              </label>
          </div>         
        </div>
        <button
          type="button"
          className="filter-button"
          onClick={ fechTransaction }
        >
          <span>Filtrar</span>
      </button>
        </HeaderDetailsContainer>        
      }   
    </>
  );
}

export default HeaderTransactionDatails;