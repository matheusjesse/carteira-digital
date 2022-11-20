const requestBalance = async (token) => {
  try {
    const response = await fetch(`http://localhost:8000/account`, {
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

export default requestBalance;