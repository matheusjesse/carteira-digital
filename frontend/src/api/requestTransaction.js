const requestTransaction = async (token) => {
  try {
    const response = await fetch(`http://localhost:8000/transaction`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    const data = await response.json();
    
    return data;
  } catch (err) {
    console.log(err);
  }
};

const requestTransactionFilter = async (token, filterType) => {
  const { date, filter } = filterType;
  try {
    const response = await fetch(`http://localhost:8000/transaction/filter/index.html?date=${date}&filter=${filter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },      
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

const requestSetTransaction = async (token, transaction) => {
  try {
    const response = await fetch(`http://localhost:8000/account/cashout`, {
      method: 'PATCH',
      body: JSON.stringify(transaction),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    const data = await response.json();
    console.log(response)
    
    return data;
  } catch (err) {
    console.log(err);
  }
};


export default requestTransaction;
export { requestTransactionFilter, requestSetTransaction };