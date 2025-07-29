function EntryCard({ entry, onCardClick }) {
  return (
    <div onClick={onCardClick} className='border rounded p-4 mb-4 shadow'>
      <h2 className='text-lg font-semibold'>{entry.title}</h2>
      <p className='text-sm text-gray-500'>{entry.date}</p>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          className='w-full h-auto mt-2 rounded'
        />
      )}
      <p className='mt-2 text-gray-700'>{entry.content.slice(0, 100)}...</p>
    </div>
  );
}

export default EntryCard;
