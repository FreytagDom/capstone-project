import styled from 'styled-components';
import Image from 'next/image';

export const InfoButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  /* margin-bottom: -1rem; */
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  /* margin: 5px; */
`;

export const InfoCard = styled.div`
  position: absolute;
  display: flex;
  top: 100%;
  left: 0;
  background: linear-gradient(58deg, #09203f, #537895);
  color: azure;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  @media (max-width: 768px) {
    width: 260px;
  }
`;

export const Icon = styled(Image)`
  height: 2.8rem;
  margin-top: -1rem;
`;

export const InfoList = styled.ul`
  margin-left: -0.3rem;
`;

export const List = styled.li`
  padding-bottom: 0.3rem;
`;
