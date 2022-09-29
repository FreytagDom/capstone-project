import SavedData from '../components/SavedData';
import useLocalStorage from '../hooks/useLocalStorage';

export default function SavedFactor() {
  const [value, setValue] = useLocalStorage('_cart', []);
  function addFactor(savedData) {
    setValue([savedData, ...value]);
    console.log(value);
  }
  <div>
    <SavedData />
    <div>
      <li> {value} </li>
    </div>
  </div>;
}
