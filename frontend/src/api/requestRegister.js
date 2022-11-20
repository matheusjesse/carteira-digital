const requestRegister = async (loginForm) => {
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    });
    
    const token = await response.json();
    return token;
  } catch (error) {
    console.log('Problema encontrado ao tentar efetuar cadastro', error.message);
  }
};

export default requestRegister;