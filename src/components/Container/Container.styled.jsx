import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

export const Title = styled.h1`
  display: block;
  color: darkorange;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 400px; 

  & input{
    margin: 0px;
  }
`;

