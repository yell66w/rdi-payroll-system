import React from 'react';
import ReactModal from 'react-modal';
import { 
 Wrapper,
 ModalStyle,
 OverlayStyle,
 CrossArea,
 CrossIcon,
 InfoHeader,
 FstList,
 FstHeader,
 FlxChkBx,
 FstCol,
 Li,
 SndCol,
 SndList

} from './styles';


ReactModal.setAppElement('#root');

const EditEmployee = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Edit Employee Modal"
      onRequestClose={onClose}
    >
      {/* Body */}
      <Wrapper>
        <CrossArea>
            <CrossIcon>
            <svg 
                xmlns="http://www.w3.org/2000/svg"            
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 64 64">
                <path d="M52 2H12C6.476 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10zm-2.002 40.799L42.799 50L31.998 39.199L21.2 50l-7.201-7.201L24.799 32l-10.8-10.801L21.2 14l10.798 10.799L42.799 14l7.199 7.199L39.199 32l10.799 10.799z" fill="currentColor"/></svg>            
            </CrossIcon>
        </CrossArea>
        <InfoHeader>
            What do you want to edit in John Doe's Information
        </InfoHeader>
        
        <FstList>
            <FstHeader>
                PERSONAL INFORMATION
            </FstHeader>
            <FlxChkBx>
              <FstCol>
                              
               <Li>
                    <input type="checkbox" /> Employee Number
                </Li> 
               <Li>
                    <input type="checkbox" /> Last Name
                </Li> 
               <Li>
                    <input type="checkbox" /> First Name
                </Li> 
               <Li>
                    <input type="checkbox" /> Middle Name
                </Li> 
               <Li>
                    <input type="checkbox" /> Sex
                </Li> 
    
               
              </FstCol>
              <SndCol>
              <Li>
                    <input type="checkbox" /> Birthdate
                </Li> 
               <Li>
                    <input type="checkbox" /> Address
                </Li> 
               <Li>
                    <input type="checkbox" /> Email Address
                </Li> 
               <Li>
                    <input type="checkbox" /> Contact Number
                </Li>                
              </SndCol>
            </FlxChkBx>
        </FstList>

        <SndList>

        </SndList>
        
      </Wrapper>
    </ReactModal>
  );
};

export default EditEmployee;
