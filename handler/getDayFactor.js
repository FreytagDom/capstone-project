import styled from "styled-components";
  

export default function handleUserDayFactor(session, factors) {
  
 let userFactorToDisplay;

const userFactor = factors.filter((factors) => {
     return factors.id === session?.user.email;  
  });

  const currentTime = new Date().getHours();
 
  if (currentTime >= 6 && currentTime < 11) {
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="morningfactor"
        id={factor.id}
        value={factor.morningfactor}
        key={index}
      >
        <FactorOption name="morningfactor" value={factor.morningfactor}>
         {factor.morningfactor}
        </FactorOption> 
     
      </SetDayFactorOption>
    ));
} 
  else if (currentTime >= 11 && currentTime < 17){
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="lunchfactor"
        id={factor.name}
        value={factor.lunchfactor}
        key={index} 
      >
        <FactorOption name="lunchfactor" value={factor.lunchfactor}>
           {factor.lunchfactor}
        </FactorOption>
      </SetDayFactorOption>
    ));
}
  else if (currentTime >= 17 && currentTime < 22){
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="eveningfactor"
        id={factor.name}
        value={factor.eveningfactor}
        key={index} 
      >
        <FactorOption name="eveningfactor" value={factor.eveningfactor}>
           {factor.eveningfactor}
        </FactorOption>
      </SetDayFactorOption>
    ));
}
  else  {
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="latefactor"
        id={factor.name}
        value={factor.latefactor}
        key={index}
      >
        <FactorOption name="latefactor" value={factor.latefactor}>
          {factor.latefactor}
        </FactorOption>
      </SetDayFactorOption>
    ));
}
 
  return userFactorToDisplay;
}




const FactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  padding-top: 0.4rem;
  color: #5c940d;
  background: transparent;
`;

const SetDayFactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;
