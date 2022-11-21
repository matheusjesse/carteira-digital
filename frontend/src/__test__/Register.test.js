import { render, screen } from '@testing-library/react';
import React from 'react';
import UserProvider from '../context/UserProvider';
import Register from '../pages/Register';
import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom'

describe('Register Page', () => {
  

  it('Espera ter um H1 com texto "Olá, faça seu cadastro."', () => {
    render(<UserProvider><Router><Register /></Router></UserProvider>)
    const heading = screen.getByRole('heading', { name: /Olá, faça seu cadastro./i },{ level: 1 })
    
    expect(heading).toBeInTheDocument()
  })

  it('Espera contrar um input para username' , () => {
    render(<UserProvider><Router><Register /></Router></UserProvider>)
    const getInput = screen.queryByTestId('login-form-input-username');
    
    expect(getInput).toBeDefined();
  })

  it('Espera contrar um input para password' , () => {
    render(<UserProvider><Router><Register /></Router></UserProvider>)
    const getInput = screen.queryByTestId('login-form-input-password');
    
    expect(getInput).toBeDefined();
  })

  it('Espera botão estar desabilitado caso os valores do input estejam vazio' , () => {
    render(<UserProvider><Router><Register /></Router></UserProvider>)
  
    const button = screen.getByRole("button");
    
    expect(button).toBeDisabled();    
  })
})
