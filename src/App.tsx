import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-slate-200 min-h-screen">
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
