import { useState } from 'react';
import Greet from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Status from './Components/Status';
import Heading from './Components/Heading';
import Oscar from './Components/Oscar';
import Button from './Components/Button';
import Button2 from './Components/Button2';
import Button3 from './Components/Button3';
import Input from './Components/Input';
import Input2 from './Components/Input2';
import Tailwind from './Components/Tailwind';
import ImportExport from './Components/ImportExport';
import Animals from './Components/Animals';
import MyUseState from './Components/MyUseState';
import User from './Components/User';
import User2 from './Components/User2';

function App() {
  const [count, setCount] = useState(0);

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-slate-200 min-h-screen">
      <Greet name='Joe' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Some text</Heading>
      </Oscar>
      <Button handleClick={() => {
        console.log('Button clicked.');
      }} />
      <Button2 handleClick={(event) => {
        console.log('Button2 clicked', event);
      }} />
      <Button3 handleClick={(event, id) => {
        console.log('Button3 clicked', event, id);
      }} />
      <Input value='' handleChange={event => console.log(event)} />
      <Input2 value='' />
      <Tailwind text='text' className='bg-blue-500 px-2 mt-2' />
      <ImportExport example='example' />
      <Animals animals={[
        {species: 'horse', name: 'Daniel'},
        {species: 'monkey', name: 'Bob'}
      ]} />
      <MyUseState />
      <User />
      <User2 />
      {/* Counter: */}
      <h1 className='my-5 text-3xl font-bold underline'>
        Counter
      </h1>
      <button className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
              onClick={() => setCount(prev => prev + 1)}
              >Count: {count}</button>
    </div>
  );
}

export default App;
