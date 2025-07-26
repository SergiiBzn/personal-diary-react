import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddEntryModal from './components/AddEntryModal';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

  return (
    <>
      <Header setIsAddModalOpen={() => setIsAddModalOpen(true)} />
      {isAddModalOpen && (
        <AddEntryModal setIsAddModalOpen={setIsAddModalOpen} />
      )}
    </>
  );
};

export default App;
