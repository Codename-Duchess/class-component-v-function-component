import FunctionBasedNameField from './components/NameField/FunctionBasedNameField';
import ClassBasedNameField from './components/NameField/ClassBasedNameField';
import { useEffect, useState } from 'react';

function App() {

  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
const date = new Date();
  const hour = date.getHours();

  if(hour < 12) {
    setTimeOfDay('morning');
  } else
  if(hour >= 12 && hour < 18) {
    setTimeOfDay('afternoon');
  } else {
   setTimeOfDay('evening');
  }
  },[]);

  return (
    <div style={{ padding: '50px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ border: '1px solid red', width: '45%', margin: '2.5%', padding: '30px' }}>
          <h2>FunctionBasedNameField</h2>
          <FunctionBasedNameField timeOfDay={timeOfDay} />
        </div>
        <div style={{ border: '1px solid blue', width: '45%', margin: '2.5%', padding: '30px' }}>
          <h2>ClassBasedNameField</h2>
          <ClassBasedNameField timeOfDay={timeOfDay} />
        </div>
      </div>
    </div>
  );
}

export default App;
