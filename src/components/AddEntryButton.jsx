function AddEntryButton({ setIsAddModalOpen }) {
  return (
    <div>
      <button onClick={() => setIsAddModalOpen(true)}>Add new Entry</button>
    </div>
  );
}

export default AddEntryButton;
