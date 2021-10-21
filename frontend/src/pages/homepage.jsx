import styled from "styled-components"
import Sidebar from "components/sidebar/sidebar"
import Header from "components/header/header"
import audNav from "components/navData/auditorNav"
import Link from "components/list/list"

const MainCan = styled.div`
  display: flex;    
`;

const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
`;

// map to mapout the array in a specific file
const AudNavCont = audNav.map(
  function(navCont)
  {
    return(
      <Link key={navCont.id} theLink={navCont.theLink} theList={navCont.theList} />
    )
  }
)


const AuditorPage = () => {
  return (
    <> 
        <MainCan>
          <Sidebar listContent={AudNavCont}/>
          {/* pass the Auditor Navigation List as an object to sidebar props */}
          <MainRight>
            <Header headerName="payroll" />
            <div>
                this is table main
            </div>
          </MainRight>
        </MainCan>        
    </>
  
  )
  
};

export default AuditorPage;

// import {Link} from "react-router-dom"
// to="/"
