import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddEntryModal from './components/AddEntryModal';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formError, setFormError] = useState('');

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

  const handleAddEntry = (entry) => {
    const isDuplicate = entries.some((entrie) => entrie.date === entry.date);

    if (isDuplicate) {
      setFormError('Choose another day, thank you!');
    } else {
      setEntries((prev) => [...prev, entry]);
      setFormError('');
      setIsAddModalOpen(false);
    }
  };

  return (
    <>
      <Header setIsAddModalOpen={() => setIsAddModalOpen(true)} />
      {isAddModalOpen && (
        <AddEntryModal
          setIsAddModalOpen={setIsAddModalOpen}
          onSubmit={handleAddEntry}
          isError={formError}
        />
      )}
    </>
  );
};

export default App;
