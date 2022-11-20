import styled from 'styled-components';

const TransactionContainer = styled.form`
  
  width:260px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-right: 8px;

  input{
    width: 180px;
    height: 28px;
    margin-left: 8px;
    border-radius: 8px;
    padding-left: 10px;
  }

  input[type=number] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  label {
    background: white;
    width: 260px;
    padding: 8px;
    font-size: 1.2em;
    font-family: 'Kanit', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 400px;
    height: 44px;
    background: white;
    border-radius: 12px;
    font-size: 1.4em;
    font-family: 'Kanit', sans-serif;
    cursor:pointer;
  }

  .title-transaction {
    background: white;
    width: 400px;
    height: 48px;
    text-align: center;
    padding-top: 8px;
    font-size: 1.4em;
    font-family: 'Kanit', sans-serif;
    border-radius: 12px 12px 0 0;
  }

  .value-label {
    border-radius: 0 0 12px 12px;
    margin-bottom: 8px;
    padding-bottom: 16px;
  }

`;

export default TransactionContainer;