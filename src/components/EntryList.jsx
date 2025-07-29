import EntryCard from './EntryCard';

function EntryList({ entries, onCardClick }) {
  return (
    <div>
      {entries
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((entry, index) => (
          <EntryCard
            key={index}
            entry={entry}
            onCardClick={() => {
              onCardClick(entry);
            }}
            className='cursor-pointer hover:shadow-md transition'
          />
        ))}
    </div>
  );
}

export default EntryList;
