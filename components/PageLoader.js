import styled, { keyframes } from "styled-components";

export default function Loading() {
    
    return(
             <Page>
             <Container>
             <Ring></Ring>
             <Ring></Ring>
             <Ring></Ring>
             <Ring></Ring>
             <H3>loading</H3>
             </Container>
             </Page>       
    )
}


const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
  `;
  
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;
  
  const H3 = styled.h3`
    color: black;
  `;

  const rotate1 = keyframes`
    from {
      transform: rotateX(50deg) rotateZ(110deg);
    }
  
    to {
      transform: rotateX(50deg) rotateZ(470deg);
    }
  `;
  
  const rotate2 = keyframes`
    from {
      transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg);
    }
  
    to {
      transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg);
    }
  `;
  
  const rotate3 = keyframes`
    from {
      transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg);
    }
  
    to {
      transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg);
    }
  `;
  
  const rotate4 = keyframes`
    from {
      transform: rotateX(70deg) rotateZ(270deg);
    }
  
    to {
      transform: rotateX(70deg) rotateZ(630deg);
    }
  `;
  
 const Ring = styled.div`
    width: 190px;
    height: 190px;
    border: 1px solid transparent;
    border-radius: 50%;
    position: absolute;
  
    &:nth-child(1) {
      border-bottom: 8px solid rgb(255, 141, 249);
      animation: ${rotate1} 2s linear infinite;
    }
  
    &:nth-child(2) {
      border-bottom: 8px solid rgb(255, 65, 106);
      animation: ${rotate2} 2s linear infinite;
    }
  
    &:nth-child(3) {
      border-bottom: 8px solid rgb(0, 255, 255);
      animation: ${rotate3} 2s linear infinite;
    }
  
    &:nth-child(4) {
      border-bottom: 8px solid rgb(252, 183, 55);
      animation: ${rotate4} 2s linear infinite;
    }
  `;
  