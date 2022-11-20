import { useEffect, useContext, useState } from "react";
import TableTransactionContainer from "./style";
import requestTransaction from '../../api/requestTransaction';
import UserContext from "../../context/UserContext";
import moment from 'moment';

function TableTransaction() {  

  const {
    balance,
    transaction,
    setTransaction
  } = useContext(UserContext);
  
  const fechTransaction = async () => {
    const token= localStorage.getItem('token')
    const response = await requestTransaction(token);
    setTransaction(response);
  }

  function formatDate(date) {    
    const a = moment(date).format('L')
    return a
  }

  function formatHour(date) {
    moment.locale('pt-br')
    const hour = moment(date).format('LT')
    return hour
  }


  useEffect(() => {
    fechTransaction();
  }, [])


  return (
    <TableTransactionContainer >
      <thead>
        <tr>
          <th>Data</th>
          <th>Hora</th>
          <th>Valor</th>
        </tr>
      </thead>
      <div className="scrollbar">
        <tbody>
          {
            transaction.length > 0 && (        
              transaction.map((item, index) =>(
                  <tr className="table-data" key={index + 1}>
                    <td>{ formatDate(item.createdAt)}</td>
                    <td>{formatHour(item.createdAt)}</td>
                    <td>{ `${ balance.account.id  === item.debitedAccountId ? '- ' : '+ ' }${item.value}` }</td>
                  </tr>
                ))
              
            )
          }
        </tbody>
      </div>
    </TableTransactionContainer >
  );
}

export default TableTransaction;