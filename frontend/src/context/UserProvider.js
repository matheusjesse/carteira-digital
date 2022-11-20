import React, { useState, useMemo } from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [balance, setBalance] = useState({});
  const [transaction, setTransaction] = useState([]);

  const context = useMemo(() => ({
    username,
    setUsername,
    password,
    setPassword,
    loginError, 
    setLoginError,
    balance, 
    setBalance,
    transaction,
    setTransaction

  }), [
    username,
    password,
    loginError,
    balance,
    transaction
  ]);

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;
