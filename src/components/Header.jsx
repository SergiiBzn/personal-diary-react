import AddEntryButton from './AddEntryButton';

function Header({ setIsAddModalOpen }) {
  return (
    <header className="flex items-center justify-between bg-white shadow p-4 rounded-md mb-6">
      <h1 className="text-2xl font-bold text-gray-800">My Diary</h1>
      <AddEntryButton setIsAddModalOpen={setIsAddModalOpen} />
    </header>
  );
}

export default Header;
