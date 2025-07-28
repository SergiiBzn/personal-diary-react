import EntryCard from './EntryCard';

function EntryList({ entries }) {
  return (
    <div>
      {entries
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((entry, index) => (
          <EntryCard key={index} entry={entry} />
        ))}
    </div>
  );
}

export default EntryList;
