import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
width:310px;
border-radius:20px;
background-color: #ffffff;
box-shadow: 2px 15px 15px 4px rgba(34, 60, 80, 0.2);
padding: 30px;
`;

export const CloseBtn = styled.button`
position: absolute;
top: 8px;
right: 8px;
padding:1px;
border: none;
cursor: pointer;
&:hover,
&:focus{
  background-color: darkorange;
}`;

export const TextArea = styled.textarea`
  margin-bottom: 20px;
  width: 300px;
`;

export const Button = styled.button`
  background-color: #ff6b0a;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 3px 12px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
`;