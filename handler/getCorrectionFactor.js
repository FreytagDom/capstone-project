import styled from "styled-components";
  

export default function handleUserCorrectionFactor(session, factors, correctionfactors) {
  
  let userCorrectionFactorToDisplay  ;  

  const userCorrectionFactor = correctionfactors.filter((correctionfactor) => {
    return correctionfactor.id === session.user.email; 
  });

  const currentTime = new Date().getHours();
 
  if (currentTime >= 6 && currentTime < 11) {
    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="morningcorrectionfactor"
          id={correctionfactor.name}
          value={correctionfactor.morningcorrectionfactor}
          key={index}  
        >
          <CorrectionFactorOption>
             {correctionfactor.morningcorrectionfactor}
            </CorrectionFactorOption>
        </SetCorrectionFactorOption>
      )
    );
  } 
  else if (currentTime >= 11 && currentTime < 17){
    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="lunchcorrectionfactor"
          id={correctionfactor.name}
          value={correctionfactor.lunchcorrectionfactor}
          key={index}
        >
          <CorrectionFactorOption
            name="lunchcorrectionfactor"
            value={correctionfactor.lunchcorrectionfactor}
          >
             {correctionfactor.lunchcorrectionfactor}
          </CorrectionFactorOption>
        </SetCorrectionFactorOption>
      )
    );
  }
  else if (currentTime >= 17 && currentTime < 22){
    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="eveningcorrectionfactor"
          id={correctionfactor.name}
          value={correctionfactor.eveningcorrectionfactor}
          key={index}
        >
          <CorrectionFactorOption
            name="eveningcorrectionfactor"
            value={correctionfactor.eveningcorrectionfactor}
          >
             {correctionfactor.eveningcorrectionfactor}
          </CorrectionFactorOption>
        </SetCorrectionFactorOption>
      )
    );
  }
  else  {
    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="latecorrectionfactor"
          id="latecorrectionfactor"
          value={correctionfactor.latecorrectionfactor}
          key={index}
          
        >
          <CorrectionFactorOption       name="latecorrectionfactor"
          id="latecorrectionfactor"
          value={correctionfactor.latecorrectionfactor} >
            {correctionfactor.latecorrectionfactor}</CorrectionFactorOption>
          </SetCorrectionFactorOption>
        
      )
    );
  }
 
  return userCorrectionFactorToDisplay;
}



const CorrectionFactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;

const SetCorrectionFactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;