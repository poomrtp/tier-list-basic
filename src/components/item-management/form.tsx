import React, { HTMLAttributes, useState } from 'react';

interface IFormProps {
  onCreate: (title: string) => void;
}

function Form({
  className,
  onCreate,
}: IFormProps & HTMLAttributes<HTMLDivElement>) {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    onCreate(title);
    setTitle('');
  };

  return (
    <div className={className}>
      <div className="flex flex-row gap-4">
        <input
          className="text-black rounded-md p-2"
          type="text"
          placeholder="Input Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="py-2 px-4 bg-blue-600 rounded-md text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
