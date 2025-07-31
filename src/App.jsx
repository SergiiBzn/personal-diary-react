import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddEntryModal from './components/AddEntryModal';
import EntryList from './components/EntryList';
import ViewEntryModal from './components/ViewEntryModal';

const App = () => {
  const [entries, setEntries] = useState(loadInitialEntries);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  function loadInitialEntries() {
    try {
      const stored = localStorage.getItem('entries');
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error('Failed to parse localStorage:', err);
      return [];
    }
  }

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
    <div className='min-h-screen bg-gray-100 p-4 sm:p-8'>
      <Header setIsAddModalOpen={() => setIsAddModalOpen(true)} />
      {isAddModalOpen && (
        <AddEntryModal
          setIsAddModalOpen={setIsAddModalOpen}
          onSubmit={handleAddEntry}
          isError={formError}
        />
      )}
      <EntryList
        entries={entries}
        onCardClick={(entry) => {
          setSelectedEntry(entry);
          setIsViewModalOpen(true);
        }}
      />
      {isViewModalOpen && selectedEntry && (
        <ViewEntryModal
          entry={selectedEntry}
          onClose={() => {
            setIsViewModalOpen(false);
            setSelectedEntry(null);
          }}
        />
      )}
    </div>
  );
};

export default App;
