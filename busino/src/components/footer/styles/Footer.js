import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
  background: #e7f4f6;

`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin-left: 50px;
  
`

export const Column = styled.div` 
    display: grid;
  text-align: left;
  margin-left: 0px;
 
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(230px ,1fr));
  grid-gap: 30px;
  
 
  
  @media(max-width: 1000px){
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  }
`

export const Link = styled.div`
  color: #000000;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Roboto Flex', sans-serif;
  text-decoration: none;
  
  &:hover{
    color: red;
    transition: 200ms ease-in;
  }
`

export const Title = styled.div` 
    font-size: 24px;
    color: #22395b;
   margin-bottom: 40px;
  font-weight: bold;
`