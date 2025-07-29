function ViewEntryModal({ entry, onClose }) {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white p-6 rounded-lg max-w-lg w-full shadow-lg'
      >
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>{entry.title}</h2>
          <button onClick={onClose} className='text-gray-500 text-xl'>
            ×
          </button>
        </div>
        <p className='text-sm text-gray-500'>{entry.date}</p>
        {entry.image && (
          <img src={entry.image} alt={entry.title} className='my-4 rounded' />
        )}
        <p className='text-gray-800 whitespace-pre-wrap'>{entry.content}</p>
      </div>
    </div>
  );
}

export default ViewEntryModal;
