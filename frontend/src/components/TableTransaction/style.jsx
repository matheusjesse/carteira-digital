import styled from 'styled-components';

const TableTransactionContainer  = styled.table`
 color: white;
 width: 520px;
 height: 300px;
 border-radius: 12px;
 background: white;
 margin-top: 8px;
 color: black;
 white-space: nowrap;

  .scrollbar {
    overflow:auto;
    height:300px;
    width: 100%;
  }

  tbody {
    width: 520px;
  }

 tr{
  display: flex;
  justify-content: space-between;
  padding: 8px 18px 8px 18px;
  font-family: 'Kanit', sans-serif;
 }

 .table-data {
  box-shadow: 0px 0px 1px 0px black;
  width: 499px;
 }

 th {
  width: 80px;
  text-align: center;
 }

 td {
  width: 80px;
  text-align: center;
 }


`;

export default TableTransactionContainer ;