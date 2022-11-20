import styled from 'styled-components';

const HeaderDetailsContainer = styled.div`
  background: white;
  width: 250px;
  height: 198px;
  margin-top: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  .left-section {
    width: 124px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .left-section span {
    width: 124px;
    height: 28px;
    text-align: left;
    padding-left: 8px;
    font-size: 1em;
    font-family: 'Kanit', sans-serif;
    padding-top: 1px;
  }

  .transaction-title {
    width: 248px;
    text-align: center;
    font-size: 1.4em;
    font-family: 'Kanit', sans-serif;
  }

  .filter-button {
    width: 128px;
    height: 34px;
    background: white;
    border-radius: 12px;
    font-size: 1.2em;
    font-family: 'Kanit', sans-serif;    
    border: 2px solid gray;
  }

  .filter-button:enabled {    
    box-shadow: 2px 2px 0 1px gray;
    cursor:pointer;
  }

  select {
    width: 100px;
    height: 20px;
    padding-left: 4px;
  }

  .right-section {
    width: 124px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .date-section {
    width: 124px;
    height: 28px;
    display: flex;
    align-items: center;
    
  }

  .transaction-section {
    width: 124px;
    height: 28px;
    display: flex;
    align-items: center;
  }

  
`;

export default HeaderDetailsContainer;