import HomeBodyContainer from "./style";
import Balance from '../Balance';
import Transaction from '../Transaction';
import HeaderTransactionDatails from '../HeaderTransactionDetails'
import TableSection from '../TableSection';
import ButtonLogOut from "../ButtonLogOut";

function HomeBody() {
  
    
  return (
    <>
      {        
        <HomeBodyContainer>
          <Balance />
          <Transaction />
          <HeaderTransactionDatails />
          <TableSection />
          <ButtonLogOut />
        </HomeBodyContainer>        
      }   
    </>
  );
}

export default HomeBody;