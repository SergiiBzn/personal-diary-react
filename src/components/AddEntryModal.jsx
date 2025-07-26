import EntryForm from './EntryForm';

function AddEntryModal({ setIsAddModalOpen, onSubmit, isError }) {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
      onClick={() => setIsAddModalOpen(false)}
    >
      <div
        className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-2'>
          <h2 className='text-xl font-semibold'>Add New Entry</h2>
        </div>
        <button
          onClick={() => setIsAddModalOpen(false)}
          className='text-gray-500 hover:text-gray-700 transition'
        >
          Close
        </button>
        <EntryForm onSubmit={onSubmit} isError={isError} />
      </div>
    </div>
  );
}

export default AddEntryModal;
