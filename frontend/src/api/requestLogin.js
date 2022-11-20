const requestLogin = async (loginForm) => {
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    });
    console.log(response)
    const token = await response.json();
    return token;
  } catch (error) {
    console.log('Problema encontrado ao tentar efetuar login', error.message);
  }
};

export default requestLogin;