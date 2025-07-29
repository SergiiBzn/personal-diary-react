function AddEntryButton({ setIsAddModalOpen }) {
  return (
    <div className='flex justify-end mb-6'>
      <button
        onClick={() => setIsAddModalOpen(true)}
        className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-200'
      >
        + Add New Entry
      </button>
    </div>
  );
}

export default AddEntryButton;
