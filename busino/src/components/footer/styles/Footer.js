import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background: #eaf5f8;
  height: 520px;
  @media only screen and (max-width: 1000px) {
    padding: 10px 10px;
    display: flex;
    height: 1000px;
  }

`
export const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`

export const Column = styled.div` 
    display: flex;
   flex-direction: column;
   text-align: left;
   margin-left: 60px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(220px ,1fr));
  grid-gap: 20px;
  
  @media(max-width: 1000px){
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  }
`

export const Link = styled.div`
  color: #818585;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: lighter;
  font-family: 'Roboto Flex', sans-serif;
  text-decoration: none;

  &:hover {
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