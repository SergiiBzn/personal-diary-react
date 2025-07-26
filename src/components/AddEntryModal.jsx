function AddEntryModal({ setIsAddModalOpen }) {
  return (
    <div
      className='fixed inset-0 bg-blue-300 bg-opacity-50 flex items-center justify-center'
      onClick={() => setIsAddModalOpen(false)}
    >
      <div
        className='bg-white p-8 rounded shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-2'>
          <h2 className='text-xl font-semibold'>Add New Entry</h2>
        </div>
        <p>This will be your form content...</p>
        <button
          onClick={() => setIsAddModalOpen(false)}
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddEntryModal;
