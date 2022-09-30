import FactorEntry from '../pages/setInsulinFactor';
import useLocalStorage from '../hooks/useLocalStorage';

export default function SavedData() {
  const [value, setValue] = useLocalStorage('_cart', []);
  function addFactor(savedData) {
    setValue([savedData, ...value]);
  }
  return (
    <>
      <FactorEntry onAddFactor={addFactor} />

      {value.map((items) => {
        return (
          <div key={items.id}>
            <ul> {items.insulin} </ul>
            <li>{items.morningfactor} morgens</li>
            <li>{items.lunchfactor} mitttags</li>
            <li>{items.eveningfactor} abends</li>
          </div>
        );
      })}
    </>
  );
}
