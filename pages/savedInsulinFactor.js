// import styled from 'styled-components';
// import { keyframes } from 'styled-components';
// import { nanoid } from 'nanoid';
// import { useState } from 'react';

// export default function FactorEntry() {
//   function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const basal = form.basal.value;
//     const bolus = form.bolus.value;
//     const morningfactor = form.morningfactor.value;
//     const lunchfactor = form.lunchfactor.value;
//     const eveningfactor = form.eveningfactor.value;

//     const cardData = {
//       id: nanoid(),
//       basal: basal,
//       bolus: bolus,
//       morningfactor: morningfactor,
//       lunchfactor: lunchfactor,
//       eveningfactor: eveningfactor,
//     };

//     console.log(cardData);
//   }
//   const [value, setValue] = useState();

//   function logValue() {
//     console.log(value);
//   }

//   return (
//     <>
//       <Wrapper>
//         <InsulinFactor>Faktor anlegen</InsulinFactor>
//         <EntryForm onSubmit={handleSubmit}>
//           <LabelIu> Welches Insulin </LabelIu>
//           <InsulinSelect
//             htmlFor="insulin"
//             value={value}
//             onChange={(e) => {
//               setValue(e.target.value);
//             }}
//           >
//             <InsulinOption value="basal" name="basal" id="basal">
//               Basal
//             </InsulinOption>
//             <InsulinOption value="bolus" name="bolus" id="bolus">
//               Bolus
//             </InsulinOption>
//           </InsulinSelect>

//           <LabelFa htmlFor="factor">
//             Welcher Tageszeit <br /> Faktor
//             <DataInput
//               type="decimal"
//               name="morningfactor"
//               placeholder="Faktor morgens"
//               id="morningfactor"
//               maxLength={'3'}
//               min="0"
//             />
//             <DataInput
//               type="decimal"
//               name="lunchfactor"
//               placeholder="Faktor mittags"
//               id="lunchfactor"
//               maxLength={'3'}
//               min="0"
//             />
//             <DataInput
//               type="decimal"
//               name="eveningfactor"
//               placeholder="Faktor abends"
//               id="eveningfactor"
//               maxLength={'3'}
//               min="0"
//             />
//           </LabelFa>

//           <Button onClick={logValue} type="submit">
//             bestätigen
//           </Button>
//         </EntryForm>
//       </Wrapper>
//     </>
//   );
// }

// const Wrapper = styled.section`
//   display: grid;
//   grid-template-rows: min-content auto 48px;
//   height: inherit;
//   justify-content: center;
// `;

// const hue = keyframes`
//  from {
//    -webkit-filter: hue-rotate(180deg);
//  }
//  to {
//    -webkit-filter: hue-rotate(-180deg);
//  }
// `;

// const Label = styled.label`
//   background-color: beige;
//   border-radius: 8px;
//   display: grid;
//   text-align: center;
//   height: min 4rem;
// `;

// const LabelIu = styled(Label)`
//   color: #5c940d;
// `;

// const LabelFa = styled(Label)`
//   color: #364fc7;
// `;
// const InsulinSelect = styled.select`
//   background-color: beige;
//   border-radius: 8px;
//   display: grid;
//   text-align: center;
//   height: min 4rem;
//   color: #364fc9;
// `;

// const InsulinOption = styled.option`
//   border-radius: 8px;
//   text-align: center;
//   color: #5c940d;
//   background: transparent;
// `;
// const DataInput = styled.input`
//   border-radius: 8px;
//   text-align: center;
// `;

// const Button = styled.button`
//   background-color: skyblue;
//   color: darkblue;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   border-radius: 15px;
//   height: 20px;
// `;

// const EntryForm = styled.form`
//   display: grid;
//   justify-content: center;
//   display: grid;
//   gap: auto;
//   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//   align-content: start;
//   margin: 0;
//   padding: 0;
//   overflow-y: auto;
//   justify-content: center;
// `;

// const InsulinFactor = styled.h2`
//   background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -webkit-animation: ${hue} 10s infinite linear;
//   color: purple;
//   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//   text-align: center;
// `;
