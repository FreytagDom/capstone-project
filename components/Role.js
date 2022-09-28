import styled from 'styled-components';

export function InsulinSelects() {
  <InsulinSelect
    htmlFor="insulin"
    key="id"
    // onChange={(e) => {
    //   setValue(e.target.value);
    // }}
  >
    <InsulinOption key="basal" value="basal" name="basal" id="basal">
      Basal
    </InsulinOption>
    <InsulinOption key="bolus" name="bolus" id="bolus">
      Bolus
    </InsulinOption>
  </InsulinSelect>;
}

const InsulinSelect = styled.select`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: min 4rem;
  color: #364fc9;
`;

const InsulinOption = styled.option`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;
