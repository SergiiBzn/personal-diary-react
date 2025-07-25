import { useState, useEffect } from 'react';

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('entries');
    if (stored) {
      setEntries(JSON.parse(stored));
    } else {
      setEntries([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  return <h1 className='text-3xl font-bold underline'>React + TailwindCSS</h1>;
};

export default App;
