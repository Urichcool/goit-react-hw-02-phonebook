import styled from "@emotion/styled";


export const ContactsContainer = styled.div`
 display: flex;
  height: 100vh;
  background-color: #dadada;
  
`;

export const ContactsApp = styled.div`
margin:auto;
  display: flex;
  flex-direction: column;
`;

export const ContactsTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  color:#8181ec;
`;

export const ContactsAddForm = styled.form`
    width:250px;
  border: 1px solid;
  border-radius: 4px;
  margin-bottom:20px;
`

export const ContactsAddButton = styled.button`
margin: 0;
padding: 0;
  width: 150px;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  &:hover,
  &:focus {
    background-color: #b3b3f1;
  }
`;

export const ContactsList = styled.ol`
    margin: 0;
    padding: 0;
    list-style-position: inside;
    
`

export const ContactsListItem = styled.li`
    margin-bottom:5px;
    &:last-child{
        margin-bottom:0;
    }
`



export const ContactsListLabel = styled.label`
    display: flex;
    flex-direction: column;
    color: orange;
    font-weight: 500;
    margin-bottom: 10px;
`

export const ContactsFilterInput = styled.input`
    width: 200px;
`