import styled from "styled-components";
  
export default function handleUserCorrectionFactor(session, correctionfactors) {
  
  let userCorrectionFactorToDisplay  ;  

  const userCorrectionFactor = correctionfactors.filter((correctionfactor) => {
    return correctionfactor.id === session?.user.email; 
  });

  const currentTime = new Date().getHours();
  const correctionFactorLength = userCorrectionFactor.length;

 if (correctionFactorLength === 0) {
  userCorrectionFactorToDisplay = (
      <SetCorrectionFactorOption htmlFor="setcorrectionfactor"
      name="no data" value={0} >
        <CorrectionFactorOption>0</CorrectionFactorOption>
      </SetCorrectionFactorOption>
    );
    } else if (currentTime >= 6 && currentTime < 11) {
        userCorrectionFactorToDisplay = (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="morningcorrectionfactor"
          id={userCorrectionFactor[0].name}
          value={userCorrectionFactor[0].morningcorrectionfactor}
          key={userCorrectionFactor[0].id}  
        >
          <CorrectionFactorOption>
             {userCorrectionFactor[0].morningcorrectionfactor}
            </CorrectionFactorOption>
        </SetCorrectionFactorOption>
       )
  } 
  else if (currentTime >= 11 && currentTime < 17){
        userCorrectionFactorToDisplay = (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="lunchcorrectionfactor"
          id={userCorrectionFactor[0].name}
          value={userCorrectionFactor[0].lunchcorrectionfactor}
          key={userCorrectionFactor[0].id}
        >
          <CorrectionFactorOption
            name="lunchcorrectionfactor"
            value={userCorrectionFactor[0].lunchcorrectionfactor}
          >
             {userCorrectionFactor[0].lunchcorrectionfactor}
          </CorrectionFactorOption>
        </SetCorrectionFactorOption>
       )
  }
  else if (currentTime >= 17 && currentTime < 22){
        userCorrectionFactorToDisplay = (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="eveningcorrectionfactor"
          id={userCorrectionFactor[0].name}
          value={userCorrectionFactor[0].eveningcorrectionfactor}
          key={userCorrectionFactor[0].id}
        >
          <CorrectionFactorOption
            name="eveningcorrectionfactor"
            value={userCorrectionFactor[0].eveningcorrectionfactor}
          >
             {userCorrectionFactor[0].eveningcorrectionfactor}
          </CorrectionFactorOption>
        </SetCorrectionFactorOption>
       )
  }
  else  {
      userCorrectionFactorToDisplay = (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="latecorrectionfactor"
          id={userCorrectionFactor[0].name}
          value={userCorrectionFactor[0].latecorrectionfactor}
          key={userCorrectionFactor[0].id}
          
        >
          <CorrectionFactorOption       name="latecorrectionfactor"
          id={userCorrectionFactor[0].name}
          value={userCorrectionFactor[0].latecorrectionfactor} >
            {userCorrectionFactor[0].latecorrectionfactor}</CorrectionFactorOption>
          </SetCorrectionFactorOption>
         )
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
