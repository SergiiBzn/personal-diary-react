import { useState } from 'react';

function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, image, content });
    setTitle('');
    setDate('');
    setImage('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        required
        className='border p-2 rounded w-full'
      />
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className='border p-2 rounded w-full'
      />
      <input
        type='text'
        value={image}
        placeholder='Image URL'
        onChange={(e) => setImage(e.target.value)}
        className='border p-2 rounded w-full'
      />
      <textarea
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Content...'
        className='border p-2 rounded w-full'
      />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition'
      >
        Save
      </button>
    </form>
  );
}

export default EntryForm;
