import { useState } from 'react';

function EntryForm({ onSubmit, isError }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !image || !content) {
      setFormError('Alle Felder müssen ausgefüllt sein!');
      return;
    } else {
      onSubmit({ title, date, image, content });
      setTitle('');
      setDate('');
      setImage('');
      setContent('');
    }
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
        required
      />
      {isError && <p className='text-red-500 text-sm mt-1'>{isError}</p>}
      <input
        type='text'
        value={image}
        placeholder='Image URL'
        onChange={(e) => setImage(e.target.value)}
        className='border p-2 rounded w-full'
        required
      />
      <textarea
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Content...'
        className='border p-2 rounded w-full'
        required
      />
      {formError && <p className='text-red-500 text-sm'>{formError}</p>}
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
