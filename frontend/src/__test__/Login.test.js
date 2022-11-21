import { render, screen } from '@testing-library/react';
import React from 'react';
import UserProvider from '../context/UserProvider';
import Login from '../pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom'

describe('Login Page', () => {
  

  it('Espera ter um H1 com texto "Olá, faça seu login."', () => {
    render(<UserProvider><Router><Login /></Router></UserProvider>)
    const heading = screen.getByRole('heading', { name: /Olá, faça seu login./i },{ level: 1 })
    
    expect(heading).toBeInTheDocument()
  })

  it('Espera contrar um input para username' , () => {
    render(<UserProvider><Router><Login /></Router></UserProvider>)
    const getInput = screen.queryByTestId('login-form-input-username');
    
    expect(getInput).toBeDefined();
  })

  it('Espera contrar um input para password' , () => {
    render(<UserProvider><Router><Login /></Router></UserProvider>)
    const getInput = screen.queryByTestId('login-form-input-password');
    
    expect(getInput).toBeDefined();
  })

  it('Espera contrar um botão com o data-testid = login-button' , () => {
    render(<UserProvider><Router><Login /></Router></UserProvider>)

    const getButton = screen.queryByTestId('login-button');

    expect(getButton).toBeDefined();
  })

  it('Espera botão estar desabilitado caso os valores do input estejam vazio' , () => {
    render(<UserProvider><Router><Login /></Router></UserProvider>)
  
    const button = screen.getByTestId("login-button");
    
    expect(button).toBeDisabled();    
  })

  it('Testa se existe o texto Ainda Não tenho conta' , () => {
    render(<UserProvider><Router><Login /></Router></UserProvider>)
  
    const node = screen.getByText("Ainda Não tenho conta");
        
    expect(node).toBeInTheDocument();    
  })
})
