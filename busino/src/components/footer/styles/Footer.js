import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
  background:   #Ddf2f5;

`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1300px;
  margin-left: 50px;
  
`

export const Column = styled.div` 
    display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(230px ,1fr));
  grid-gap: 20px;
  
  @media(max-width: 1000px){
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  }
`

export const Link = styled.div`
  color: #C3c7c7;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: lighter;
  font-family: "Agency FB";
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