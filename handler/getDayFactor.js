// import styled from "styled-components";
  

// export default function handleUserDayFactor(session, factors) {
  
//  let userFactorToDisplay;

// const userFactor = factors.filter((factors) => {
//      return factors.id === session?.user.email;  
//   });

//   const currentTime = new Date().getHours();
 
//   if (currentTime >= 6 && currentTime < 11) {
//     userFactorToDisplay = userFactor.map((factor, index) => (
//       <SetDayFactorOption
//         htmlFor="setdayfactor"
//         name="morningfactor"
//         id={factor.id}
//         value={factor.morningfactor}
//         key={index}
//       >
//         <FactorOption name="morningfactor" value={factor.morningfactor}>
//          {factor.morningfactor}
//         </FactorOption> 
     
//       </SetDayFactorOption>
//     ));
// } 
//   else if (currentTime >= 11 && currentTime < 17){
//     userFactorToDisplay = userFactor.map((factor, index) => (
//       <SetDayFactorOption
//         htmlFor="setdayfactor"
//         name="lunchfactor"
//         id={factor.name}
//         value={factor.lunchfactor}
//         key={index} 
//       >
//         <FactorOption name="lunchfactor" value={factor.lunchfactor}>
//            {factor.lunchfactor}
//         </FactorOption>
//       </SetDayFactorOption>
//     ));
// }
//   else if (currentTime >= 17 && currentTime < 22){
//     userFactorToDisplay = userFactor.map((factor, index) => (
//       <SetDayFactorOption
//         htmlFor="setdayfactor"
//         name="eveningfactor"
//         id={factor.name}
//         value={factor.eveningfactor}
//         key={index} 
//       >
//         <FactorOption name="eveningfactor" value={factor.eveningfactor}>
//            {factor.eveningfactor}
//         </FactorOption>
//       </SetDayFactorOption>
//     ));
// }
//   else  {
//     userFactorToDisplay = userFactor.map((factor, index) => (
//       <SetDayFactorOption
//         htmlFor="setdayfactor"
//         name="latefactor"
//         id={factor.name}
//         value={factor.latefactor}
//         key={index}
//       >
//         <FactorOption name="latefactor" value={factor.latefactor}>
//           {factor.latefactor}
//         </FactorOption>
//       </SetDayFactorOption>
//     ));
// }
 
//   return userFactorToDisplay;
// }




// const FactorOption = styled.div`
//   border-radius: 8px;
//   text-align: center;
//   padding-top: 0.4rem;
//   color: #5c940d;
//   background: transparent;
// `;

// const SetDayFactorOption = styled.div`
//   border-radius: 8px;
//   text-align: center;
//   color: #5c940d;
//   background: transparent;
// `;
import styled from "styled-components";

export default function handleUserDayFactor(session, factors) {
  let userFactorToDisplay;

  const userFactor = factors.filter((factor) => {
    return factor.id === session?.user.email;
  });

  const currentTime = new Date().getHours();
  const factorLength = userFactor.length;

  if (factorLength === 0) {
    userFactorToDisplay = (
      <SetDayFactorOption htmlFor="setdayfactor" name="no data" value={0}>
        <FactorOption>0</FactorOption>
      </SetDayFactorOption>
    );
  } else if (currentTime >= 6 && currentTime < 11) {
    userFactorToDisplay = (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="morningfactor"
        id={userFactor[0].id}
        value={userFactor[0].morningfactor}
        key={userFactor[0].id}
      >
        <FactorOption name="morningfactor" value={userFactor[0].morningfactor}>
          {userFactor[0].morningfactor}
        </FactorOption>
      </SetDayFactorOption>
    );
  } else if (currentTime >= 11 && currentTime < 17) {
    userFactorToDisplay = (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="lunchfactor"
        id={userFactor[0].name}
        value={userFactor[0].lunchfactor}
        key={userFactor[0].id}
      >
        <FactorOption name="lunchfactor" value={userFactor[0].lunchfactor}>
          {userFactor[0].lunchfactor}
        </FactorOption>
      </SetDayFactorOption>
    );
  } else if (currentTime >= 17 && currentTime < 22) {
    userFactorToDisplay = (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="eveningfactor"
        id={userFactor[0].name}
        value={userFactor[0].eveningfactor}
        key={userFactor[0].id}
      >
        <FactorOption name="eveningfactor" value={userFactor[0].eveningfactor}>
          {userFactor[0].eveningfactor}
        </FactorOption>
      </SetDayFactorOption>
    );
  } else {
    userFactorToDisplay = (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="latefactor"
        id={userFactor[0].name}
        value={userFactor[0].latefactor}
        key={userFactor[0].id}
      >
        <FactorOption name="latefactor" value={userFactor[0].latefactor}>
          {userFactor[0].latefactor}
        </FactorOption>
      </SetDayFactorOption>
    );
  }

  console.log(userFactorToDisplay);

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
