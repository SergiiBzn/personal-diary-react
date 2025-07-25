import AddEntryButton from './AddEntryButton';

function Header({ setIsAddModalOpen }) {
  return (
    <div className='flex justify-around'>
      <h1>My Diary</h1>
      <AddEntryButton setIsAddModalOpen={setIsAddModalOpen} />
    </div>
  );
}

export default Header;
