import useLocalStorage from '../hooks/useLocalStorage';

import FactorEntry from '../components/SetInsulinFactor';

export default function SetInsulinFactor() {
  const [factor, setFactor] = useLocalStorage('_cart', 'addFactor', []);
  function addFactor(cardFactor) {
    setFactor([cardFactor, ...factor]);
  }

  return (
    <>
      <FactorEntry onAddFactor={addFactor} />
    </>
  );
}
